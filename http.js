const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/asd") res.write("asd");
  res.end();
});

server.on("connection", (socket) => {
  console.log("new");
});

server.listen(3000);
