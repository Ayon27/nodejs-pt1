/*
 * @Author: Ayon
 * @Date: 2021-08-06 01:08:06
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 02:13:19
 */

//scaffold
const controller = {};

controller.invalidUrlController = (reqProperties, callback) => {
  console.log("error 404");
  callback(404, {
    msg: "Requested webpage not found",
  });
};

module.exports = controller;
