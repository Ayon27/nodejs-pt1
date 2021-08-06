/*
 * @Author: Ayon
 * @Date: 2021-08-06 00:04:03
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 17:15:49
 */

//dependencies
const http = require("http");
const { handleHTTP } = require("./Resource/httpHandler");
const fsDat = require("../lib/fsd");

//scaffold
const app = {};

//config
app.config = {
  port: 3000,
};

//test fs
// fsDat.delete("test", "newFile", (err) => {
//   console.log(err);
// });

//server
app.initializeServer = () => {
  const server = http.createServer(app.handler);
  server.listen(app.config.port, () =>
    console.log(`port ${app.config.port} is active`)
  );
};

//handler
app.handler = handleHTTP;
//server starter
app.initializeServer();
