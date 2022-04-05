var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const product = JSON.stringify([
        {
          name: "농구공",
          price: 50000,
        },
      ]);
      res.end(product);
    } else if (method === "POST") {
      res.end("Created");
    }
  }
  res.end("Sever Closed");
});

server.listen(port, hostname);

console.log("Server On");
