const http = require("http");
const fs = require("fs");

//output as stream
const server = http.createServer((req, res) => {
  if (req.url === "/asd") {
    const output = fs.createReadStream("rndTxt.txt");
    output.pipe(res);
  }
});

server.on("connection", () => {
  console.log("server stared");
});

server.listen(3000);
