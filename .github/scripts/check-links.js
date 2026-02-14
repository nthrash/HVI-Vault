/**
 * Check all resource URLs from resources.json and write status results.
 *
 * Reads resources.json, sends a HEAD request to each URL, records status,
 * then writes link-status.json with results.
 */

const fs = require('fs');

async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'HVI-Nexus-LinkChecker/1.0',
      },
    });

    clearTimeout(timeout);

    // Some sites block HEAD, try GET if we get 405
    if (response.status === 405) {
      const getResponse = await fetch(url, {
        method: 'GET',
        signal: AbortSignal.timeout(10000),
        redirect: 'follow',
        headers: {
          'User-Agent': 'HVI-Nexus-LinkChecker/1.0',
        },
      });
      return { status: getResponse.ok ? 'ok' : 'error', statusCode: getResponse.status };
    }

    return { status: response.ok ? 'ok' : 'error', statusCode: response.status };
  } catch (err) {
    return { status: 'error', statusCode: 0, error: err.message };
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
