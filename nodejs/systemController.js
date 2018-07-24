const config = require('./config/config')

const GoogleAppInterface = require('./interfaces/google/googleAppInterface');
const googleAppInterface = new GoogleAppInterface();

const SprinklerController = require('./interfaces/sprinkler/sprinklerController');
const sprinklerController = new SprinklerController();

const TouchOSCController = require('./interfaces/touch-osc/touchOscController.js');
if (config.osc.enabled) {
	console.log('Manual mode enabled!')
}

const touchOscController = new TouchOSCController();

googleAppInterface.shouldRunSprinkler().then(response => {
	if (response.shouldRun) {
		sprinklerController.runSprinkler(response.duration)
	} else {
		console.log('Sprinkler does not need to run today')
	}
})
