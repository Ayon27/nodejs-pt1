/*
 * @Author: Ayon
 * @Date: 2021-08-06 17:33:42
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 17:37:50
 */

//scaffold
const util = {};

//parse JSON to obj
util.JSONparser = (jsonString) => {
  var output = {};

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};
//export
module.exports = util;
