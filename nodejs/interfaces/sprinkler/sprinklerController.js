var rpio = require('rpio');

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
function SprinklerController() {
	rpio.open(12, rpio.OUTPUT, rpio.LOW);
}

/*
* Private helper function
*/
function startSprinkler() {
	rpio.write(12, rpio.HIGH);
  rpio.sleep(1);
}

/*
* Private helper function
*/
function stopSprinkler() {
  rpio.write(12, rpio.LOW);
  rpio.msleep(500);
}

SprinklerController.prototype.runSprinkler = function(durationMinutes) {
	console.log('Beginning sprinkler. Running for', durationMinutes, 'minutes');
	startSprinkler();
	const seconds = durationMinutes * 60 * 1000;
	setTimeout(stopSprinkler, seconds)
}

module.exports = SprinklerController;
