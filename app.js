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

fs.writeFileSync("test.txt", testDataString); //synced process, main thread get blocked. better to use writeFile()
fs.appendFileSync("test.txt", cntr.appendStr); //synced process, main thread get blocked. better to use appendFile()

// var dat = fs.readFileSync("test.txt"); //synced process, main thread get blocked. better to use readFile()

// console.log(dat.toString());

//right way to use readFile()
fs.readFile("test.txt", (err, data) => {
  if (err) return console.log(err);
  console.log(data.toString());
});
