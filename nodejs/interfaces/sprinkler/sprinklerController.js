var rpio = require('rpio');

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
function SprinklerController() {
	rpio.open(12, rpio.OUTPUT, rpio.LOW);
}

SprinklerController.prototype.runSprinkler = function(duration) {
	console.log('Beginning sprinkler. Running for', duration, 'minutes');

	rpio.write(12, rpio.HIGH);
  rpio.sleep(1);

  /* Off for half a second (500ms) */
  rpio.write(12, rpio.LOW);
  rpio.msleep(500);
}

module.exports = SprinklerController;
