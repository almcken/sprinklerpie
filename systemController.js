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
	touchOscController.addRelay1Listener((messageValue) => {
		if (messageValue == 1) {
			console.log('Manually starting sprinkler...')
			sprinklerController.manualStartSprinkler()
		} else if (messageValue == 0) {
			console.log('Manually stopping sprinkler...')
			sprinklerController.manualStopSprinkler()
		} else {
			console.log('Received unknown message value from touch OSC controller... "', messageValue, '"')
		}
	})
}

googleAppInterface.shouldRunSprinkler().then(response => {
	if (response.shouldRun) {
		sprinklerController.runSprinkler(response.duration)
	} else {
		console.log('Sprinkler does not need to run today')
	}
})
