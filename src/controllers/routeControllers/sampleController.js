/*
 * @Author: Ayon
 * @Date: 2021-08-06 01:04:20
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 02:13:15
 */

//scaffold
const controller = {};

//handle req
controller.sampleController = (reqProperties, callback) => {
  console.log(reqProperties);

  callback(200, {
    msg: "sample url",
  });
};

module.exports = controller;
