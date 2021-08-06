/*
 * @Author: Ayon
 * @Date: 2021-08-06 15:35:00
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 16:42:30
 */

//dependencies
const fs = require("fs");
const path = require("path");

//scaffold
const fsdLib = {};

//data loc
fsdLib.basedir = path.join(__dirname, "../data/");

//write data
fsdLib.create = function (dir, file, data, callback) {
  //open file
  fs.open(
    `${fsdLib.basedir + dir}/${file}.json`,
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //convert to string
        const strDat = JSON.stringify(data);

        //write to file
        fs.writeFile(fileDescriptor, strDat, (err2) => {
          if (!err2) {
            fs.close(fileDescriptor, (err3) => {
              if (!err3) {
                callback(false);
              } else {
                callback("error closing the file");
              }
            });
          } else {
            callback("error writing");
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

//read data
fsdLib.read = (dir, file, callback) => {
  fs.readFile(`${fsdLib.basedir + dir}/${file}.json`, "utf-8", (err, data) => {
    callback(err, data);
  });
};

//update data
fsdLib.update = (dir, file, data, callback) => {
  //open file
  fs.open(
    `${fsdLib.basedir + dir}/${file}.json`,
    "r+",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        //convert to string
        const strDat = JSON.stringify(data);

        //truncate file
        fs.ftruncate(fileDescriptor, (err3) => {
          if (!err3) {
            //write to file and close
            fs.writeFile(fileDescriptor, strDat, (err1) => {
              if (!err1) {
                fs.close(fileDescriptor, (err2) => {
                  if (!err2) {
                  } else {
                    console.log(err2);
                  }
                });
              } else {
                console.log(err1);
              }
            });
          } else {
            console.log(err3);
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

//delete data
fsdLib.delete = (dir, file, callback) => {
  //unlink file
  fs.unlink(`${fsdLib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("error deleting file");
    }
  });
};
module.exports = fsdLib;
