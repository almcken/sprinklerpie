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
function ChristmasLightsController() {
	const keys = Object.keys(zonePinMap);
	keys.forEach(key => {
		rpio.open(zonePinMap[key], rpio.OUTPUT, rpio.HIGH);
	})
}

/*
* Private helper function
*/
function lightsOn(zone) {
	const PIN = zonePinMap[zone];
	if (PIN) {
		rpio.write(PIN, rpio.LOW);
	} else {
		console.log('Cannot start sprinkler. No mapping found for', zone);
	}
}

/*
* Private helper function
*/
function lightsOff(zone) {
	const PIN = zonePinMap[zone];
	if (PIN) {
		rpio.write(PIN, rpio.HIGH);
	} else {
		console.log('Cannot stop sprinkler. No mapping found for', zone);
	}
}

ChristmasLightsController.prototype.lightsOn = function(zone) {
	lightsOn(zone);
}

ChristmasLightsController.prototype.lightsOff = function(zone) {
	lightsOff(zone);
}

module.exports = ChristmasLightsController;
