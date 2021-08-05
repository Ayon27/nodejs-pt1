var events = require("events");

class eventDemo extends events {
  invoke() {
    console.log("event invoked");

    setTimeout(() => {
      this.emit("event2", {
        time: "2nd",
        msg: "this is a msg",
      });
    });
  }
}

module.exports = eventDemo;
