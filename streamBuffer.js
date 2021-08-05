const fs = require("fs");
const rand = require("randomstring");

var rndStr = rand.generate(10000000);

// //create random txt file
// fs.writeFile("rndTxt.txt", rndStr, (err) => {
//   if (err) throw err;
// });

//read the txt using stream
const readStream = fs.createReadStream("rndTxt.txt");

readStream.on("data", (buffer) => {
  console.log(buffer.toString());
});
