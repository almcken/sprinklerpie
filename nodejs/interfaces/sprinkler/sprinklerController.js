const rpio = require('rpio');

// Value of the pin number, not the GPIO number
const PIN = 12;

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
function SprinklerController() {
	rpio.open(PIN, rpio.OUTPUT, rpio.HIGH);
}

/*
* Private helper function
*/
function startSprinkler() {
	rpio.write(PIN, rpio.LOW);
  rpio.sleep(1);
}

/*
* Private helper function
*/
function stopSprinkler() {
  rpio.write(PIN, rpio.HIGH);
  rpio.msleep(500);
}

/*
* Private helper function
*/
function checkSprinkler() {
  console.log('Pin', PIN, '=', rpio.read(PIN));
}

SprinklerController.prototype.runSprinkler = function(durationMinutes) {
	console.log('Beginning sprinkler. Running for', durationMinutes, 'minutes');
	startSprinkler();
	const seconds = durationMinutes * 10 * 1000;
	setTimeout(stopSprinkler, seconds)
}

module.exports = SprinklerController;
