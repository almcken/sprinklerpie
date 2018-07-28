const config = require('./config/config')

const GoogleAppInterface = require('./interfaces/google/googleAppInterface');
const googleAppInterface = new GoogleAppInterface();

const SprinklerController = require('./interfaces/sprinkler/sprinklerController');
const sprinklerController = new SprinklerController();

const TouchOSCController = require('./interfaces/touch-osc/touchOscController.js');
var touchOscController
if (config.osc.enabled) {
	console.log('Manual mode enabled!')
	touchOscController = new TouchOSCController();

	touchOscController.addRelayListener((response) => {
		if (response.messageValue == 1) {
			sprinklerController.manualStartSprinkler(response.zone);
		} else if (response.messageValue == 0) {
			sprinklerController.manualStopSprinkler(response.zone);
		} else {
			console.log('Received unknown message value from touch OSC controller... "', messageValue, '"')
		}
	})
}

function checkAndRunSprinkler() {
	googleAppInterface.shouldRunSprinkler().then(response => {
		if (response.shouldRun) {
			// hardcoded zone 1 for now
			const zone = 1;
			sprinklerController.runSprinkler(zone, response.duration)
		} else {
			console.log('Sprinkler does not need to run today')
		}
	})
}
checkAndRunSprinkler()