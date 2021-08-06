/*
 * @Author: Ayon
 * @Date: 2021-08-06 00:56:38
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 17:37:23
 */

//dependencies
const routes = require("../routes");
const {
  invalidUrlController,
} = require("../controllers/routeControllers/404Controller");

const url = require("url");
const { StringDecoder } = require("string_decoder");
const { JSONparser } = require("../Resource/util");

//scaffold
const handler = {};

handler.handleHTTP = (req, res) => {
  var method = req.method.toLowerCase();
  // console.log(method);

  var parsedURL = url.parse(req.url, true);
  // console.log(parsedURL);

  var queryStr = parsedURL.query;
  // console.log(queryStr);

  var metaData = req.headers;
  // console.log(metaData);

  var path = parsedURL.pathname;
  var trimmedPath = path.replace(/^\/|\/$/g, "");
  // console.log(trimmedPath);

  //properties for http routes
  const reqProperties = {
    method,
    parsedURL,
    queryStr,
    metaData,
    trimmedPath,
  };

  //decoder to decode form data
  const decoder = new StringDecoder("utf-8");
  var bufferCollection = "";

  //get form data as buffer and decode them
  req.on("data", (buffer) => {
    bufferCollection += decoder.write(buffer);
  });

  //select which route to call
  const routeDir = routes[trimmedPath]
    ? routes[trimmedPath]
    : invalidUrlController;

  //end form data decoding
  req.on("end", () => {
    bufferCollection += decoder.end();
    // console.log(bufferCollection); // print form data

    //add form data to reqProperties
    reqProperties.body = JSONparser(bufferCollection);
    //call that route
    routeDir(reqProperties, (httpStatus, payload) => {
      httpStatus = typeof httpStatus === "number" ? httpStatus : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadStr = JSON.stringify(payload);

      //final response
      res.setHeader("content-type", "application/json");
      res.writeHead(httpStatus);
      res.end(payloadStr);
    });

    //response handling
    // res.end("asd");
  });
};

module.exports = handler;
