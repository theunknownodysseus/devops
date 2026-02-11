const http = require('node:http');
const fs = require('node:fs'); 
const port = 5000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); 
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
