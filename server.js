const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



function returnCoinFlip() {
  result = ''
    if (Math.random() < 0.5) {
  // 50% chance of this block running
    result = "Heads"
    } else {
  // 50% chance of this block running
    result = "Tails"
    }
    return result;
}
returnCoinFlip()