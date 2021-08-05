/*
 * @Author: Ayon
 * @Date: 2021-08-06 01:02:55
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-06 02:13:11
 */

//dependencies
const {
  sampleController,
} = require("./controllers/routeControllers/sampleController");

// routing
const routes = {
  home: sampleController,
};

module.exports = routes;
