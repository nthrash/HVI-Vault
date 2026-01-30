/**
 * Sync HVI-Vault content to Redis via the HVI-Nexus sync API.
 *
 * Reads contacts.json, protocols.json, and all protocol markdown files,
 * processes the markdown (strips YAML frontmatter, rewrites image paths),
 * then POSTs everything to the sync endpoint.
 *
 * Required env vars:
 *   SYNC_API_ENDPOINT - e.g. https://hvi-nexus.vercel.app/api/sync/vault-data
 *   REDIS_SYNC_SECRET - Bearer token for authentication
 */

const fs = require('fs');
const path = require('path');

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/nthrash/HVI-Vault/main';

async function main() {
  const endpoint = process.env.SYNC_API_ENDPOINT;
  const secret = process.env.REDIS_SYNC_SECRET;

  if (!endpoint || !secret) {
    console.error('Missing SYNC_API_ENDPOINT or REDIS_SYNC_SECRET');
    process.exit(1);
  }

  const payload = {};

  // Read contacts.json
  try {
    const raw = fs.readFileSync('contacts.json', 'utf-8');
    payload.contacts = JSON.parse(raw);
    console.log('Loaded contacts.json');
  } catch (err) {
    console.warn('Could not read contacts.json:', err.message);
  }

  // Read protocols.json
  let protocols = null;
  try {
    const raw = fs.readFileSync('protocols.json', 'utf-8');
    protocols = JSON.parse(raw);
    payload.protocols = protocols;
    console.log(`Loaded protocols.json (${protocols.protocols?.length || 0} protocols)`);
  } catch (err) {
    console.warn('Could not read protocols.json:', err.message);
  }

  // Read and process protocol markdown files
  if (protocols && protocols.protocols) {
    const protocolContents = [];

    for (const proto of protocols.protocols) {
      const filename = proto.contentFile || `protocol-${proto.id}.md`;
      const filePath = path.resolve(filename);

      if (!fs.existsSync(filePath)) {
        console.warn(`Protocol file not found: ${filename}`);
        continue;
      }

      try {
        let markdown = fs.readFileSync(filePath, 'utf-8');

        // Strip YAML frontmatter
        markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');

        // Rewrite relative image paths to GitHub raw URLs
        markdown = markdown.replace(
          /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
          (_, alt, imgPath) => {
            const cleanPath = imgPath.replace(/^\//, '');
            const encodedPath = encodeURI(decodeURI(cleanPath));
            return `![${alt}](${GITHUB_RAW_BASE}/${encodedPath})`;
          }
        );

        protocolContents.push({ id: proto.id, content: markdown });
        console.log(`Processed: ${proto.id} (${filename})`);
      } catch (err) {
        console.warn(`Error processing ${filename}:`, err.message);
      }
    }

    payload.protocolContents = protocolContents;
    console.log(`\nTotal protocol contents: ${protocolContents.length}`);
  }

  // POST to sync endpoint
  console.log(`\nSyncing to ${endpoint}...`);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secret}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error('Sync failed:', response.status, result);
    process.exit(1);
  }

  console.log('Sync successful:', result);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
