var five = require("../lib/johnny-five.js");

new five.Board().on("ready", function() {
  new five.Led("O0").strobe(250);
});

// @markdown
// - [TinkerKit Led](http://tinkerkit.tihhs.nl/led-red-10mm/)
// - [TinkerKit Shield](http://tinkerkit.tihhs.nl/shield/)
// @markdown
