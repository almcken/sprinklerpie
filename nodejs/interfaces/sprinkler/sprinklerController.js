const rpio = require('rpio');

// Value of the pin number, not the GPIO number
const PIN = 12;

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
function SprinklerController() {
	rpio.open(12, rpio.OUTPUT, rpio.LOW);
}

function configTouchOSC() {
	const osc = require('node-osc');
	const oscServer = new osc.Server(3000, '0.0.0.0');
	const client = new osc.Client('192.168.0.101', 3333);
	oscServer.on('message', function (message, rinfo) {
		switch (message[0]) {
			case '/1/toggle4':
				if (message[1] == '1') {
					startSprinkler()
				} else {
					stopSprinkler()
				}
				break;
			case '/ping':
				console.log('ping')
				break;
		}
	});
}

/*
* Private helper function
*/
function startSprinkler() {
	rpio.write(PIN, rpio.HIGH);
  rpio.sleep(1);
}

/*
* Private helper function
*/
function stopSprinkler() {
  rpio.write(PIN, rpio.LOW);
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
