/*
 * @Author: Ayon
 * @Date: 2021-08-06 01:02:55
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 17:15:02
 */

//dependencies
const {
  sampleController,
} = require("./controllers/routeControllers/sampleController");

const {
  userController,
} = require("./controllers/routeControllers/userController");

// routing
const routes = {
  home: sampleController,
  user: userController,
};

module.exports = routes;
