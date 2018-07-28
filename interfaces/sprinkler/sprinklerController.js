const rpio = require('rpio');

// Value of the pin number, not the GPIO number
const zonePinMap = {
	'zone1': 12,
	'zone2': 11,
	'zone3': 7,
	'zone4': 13
}


/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
function SprinklerController() {
	const keys = Object.keys(zonePinMap);
	keys.forEach(key => {
		rpio.open(zonePinMap[key], rpio.OUTPUT, rpio.HIGH);
	})
}

/*
* Private helper function
*/
function startSprinkler(zone) {
	const PIN = zonePinMap[zone];
	if (PIN) {
		console.log('start', zone)
		rpio.write(PIN, rpio.LOW);
	} else {
		console.log('Cannot start sprinkler. No mapping found for', zone);
	}
}

/*
* Private helper function
*/
function stopSprinkler(zone) {
	const PIN = zonePinMap[zone];
	if (PIN) {
		console.log('stop', zone)
		rpio.write(PIN, rpio.HIGH);
	} else {
		console.log('Cannot stop sprinkler. No mapping found for', zone);
	}
}

/*
* Private helper function
*/
function checkSprinkler(zone) {
	const PIN = zonePinMap[zone];
	if (PIN) {
		console.log('Pin', PIN, '=', rpio.read(PIN));
	} else {
		console.log('Cannot check sprinkler. No mapping found for', zone);
	}
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
