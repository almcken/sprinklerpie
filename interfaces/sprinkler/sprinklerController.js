const rpio = require('rpio');

const zonePinMap = {

}
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
function startSprinkler(zone) {
	console.log('start', zone)
	rpio.write(PIN, rpio.LOW);
  rpio.sleep(1);
}

/*
* Private helper function
*/
function stopSprinkler(zone) {
	console.log('stop', zone)
  rpio.write(PIN, rpio.HIGH);
  rpio.msleep(500);
}

/*
* Private helper function
*/
function checkSprinkler() {
  console.log('Pin', PIN, '=', rpio.read(PIN));
}

SprinklerController.prototype.runSprinkler = function(zone, durationMinutes) {
	console.log('Beginning zone', zone, '. Running for', durationMinutes, 'minutes');
	startSprinkler(zone);
	const seconds = durationMinutes * 10 * 1000;
	setTimeout(function(){
		stopSprinkler(zone);
	}, seconds)
}

SprinklerController.prototype.manualStartSprinkler = function(zone) {
	startSprinkler(zone);
}

SprinklerController.prototype.manualStopSprinkler = function(zone) {
	stopSprinkler(zone);
}

module.exports = SprinklerController;
