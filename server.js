const http = require('http');

const server = http.createServer((req, res) => {
  // ✅ Set proper CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // ✅ Handle GET request
  if (req.method === 'GET' && req.url === '/') {
    const coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: coinFlip }));
    return;
  }

  // ❌ Not found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
