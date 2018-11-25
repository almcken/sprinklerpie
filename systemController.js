const config = require('./config/config')

const GoogleAppInterface = require('./interfaces/google/googleAppInterface');
const googleAppInterface = new GoogleAppInterface();

const LightsController = require('./interfaces/lights/christmasLights');
const lightsController = new LightsController();


if (config.osc.enabled) {
	const TouchOSCController = require('./interfaces/touch-osc/touchOscController.js');
	var touchOscController
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
			const zone = 'zone1';
			console.log(response)
			// sprinklerController.runSprinkler(zone, response.duration)
		} else {
			console.log('Sprinkler does not need to run today')
		}
	})
}

function getLightStatus() {
	googleAppInterface.getLightStatus().then(response => {
		const zone = 'zone1';
		if (response.lightsOn) {
			lightsController.lightsOn(zone)
		} else {
			lightsController.lightsOff(zone)
		}
	})
}


const app = process.argv[2]

switch (app) {
	case '--lights':
		console.log('Checking lights status')
		getLightStatus();
		break;
}