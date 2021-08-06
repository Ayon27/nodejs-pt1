/*
 * @Author: Ayon
 * @Date: 2021-08-06 17:13:50
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 17:43:36
 */

const handler = require("../../Resource/httpHandler");

//scaffold
const controller = {};

//handle req
controller.userController = (reqProperties, callback) => {
  const methods = ["get", "post", "put", "delete"];

  if (methods.indexOf(reqProperties.method) > -1) {
    controller._users[reqProperties.method](reqProperties, callback);
  } else {
    callback(405, {
      msg: "not allowed",
    });
  }
};

controller._users = {};

controller._users.post = (reqProperties, callback) => {
  const fName =
    typeof reqProperties.body.fName === "string" &&
    reqProperties.body.fName.trim().length > 0
      ? reqProperties.body.fName
      : false;

  const lName =
    typeof reqProperties.body.lName === "string" &&
    reqProperties.body.lName.trim().length > 0
      ? reqProperties.body.lName
      : false;

  const phone =
    typeof reqProperties.body.phone === "string" &&
    reqProperties.body.phone.trim().length === 11
      ? reqProperties.body.phone
      : false;

  const pwd =
    typeof reqProperties.body.pwd === "string" &&
    reqProperties.body.pwd.trim().length > 6
      ? reqProperties.body.pwd
      : false;

  const tos =
    typeof reqProperties.body.tos === "boolean" &&
    reqProperties.body.tos.trim().length > 0
      ? reqProperties.body.tos
      : false;

    if (fName && lName && phone && pwd && tos) {
      callback()
  } else {
    callback(400, {
      msg: "invalid form data",
    });
  }
};
controller._users.get = (reqProperties, callback) => {
  callback(200);
};
controller._users.put = (reqProperties, callback) => {};
controller._users.delete = (reqProperties, callback) => {};

module.exports = controller;
