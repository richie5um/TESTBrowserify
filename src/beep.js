var shout = require('./shout.js');

var beep = {};
beep.speak = function (msg) {
  console.log(shout(msg));
}

module.exports = beep;
