/**
 * Check all resource URLs from resources.json and write status results.
 *
 * Reads resources.json, sends a HEAD request to each URL, records status,
 * then writes link-status.json with results.
 */

const fs = require('fs');

// Use a browser-like User-Agent so sites don't block us
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function checkUrl(url) {
  // Try HEAD first, then fall back to GET if HEAD fails
  for (const method of ['HEAD', 'GET']) {
    try {
      const response = await fetch(url, {
        method,
        signal: AbortSignal.timeout(15000),
        redirect: 'follow',
        headers: { 'User-Agent': USER_AGENT },
      });

      // If HEAD returned a client/server error, try GET before giving up
      if (!response.ok && method === 'HEAD') continue;

      // Treat 403 as reachable — site is up but blocking bot traffic (e.g. Cloudflare)
      const reachable = response.ok || response.status === 403;
      return { status: reachable ? 'ok' : 'error', statusCode: response.status };
    } catch (err) {
      // If HEAD threw (timeout/network), try GET
      if (method === 'HEAD') continue;
      return { status: 'error', statusCode: 0, error: err.message };
    }
  }
}

async function main() {
  let resources;
  try {
    const raw = fs.readFileSync('resources.json', 'utf-8');
    resources = JSON.parse(raw);
  } catch (err) {
    console.error('Could not read resources.json:', err.message);
    process.exit(1);
  }

  const results = {};
  console.log(`Checking ${resources.resources.length} resource links...\n`);

  for (const resource of resources.resources) {
    const result = await checkUrl(resource.url);
    results[resource.id] = result;
    const icon = result.status === 'ok' ? '✅' : '❌';
    console.log(`${icon} ${resource.title}: ${result.statusCode} (${resource.url})`);
  }

  const linkStatus = {
    lastChecked: new Date().toISOString(),
    results,
  };

  fs.writeFileSync('link-status.json', JSON.stringify(linkStatus, null, 2) + '\n');
  console.log('\nWrote link-status.json');

  const errorCount = Object.values(results).filter(r => r.status !== 'ok').length;
  if (errorCount > 0) {
    console.log(`\n⚠️  ${errorCount} link(s) returned errors`);
  } else {
    console.log('\n✅ All links healthy');
  }
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
