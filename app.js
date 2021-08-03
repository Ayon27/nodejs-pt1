// var events = require("events");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("event", function (msg) {
//   console.log(msg);
// });

// myEmitter.emit("event", "event emitted");

const os = require("os");
const fs = require("fs");
var cntr = require("./counterPrint");

console.log(os.cpus());

var testDataString = JSON.stringify(cntr.testData);

fs.writeFileSync("test.txt", testDataString);
fs.appendFileSync("test.txt", cntr.appendStr);

var dat = fs.readFileSync("test.txt");

console.log(dat.toString());
