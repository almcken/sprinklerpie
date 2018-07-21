const GoogleAppInterface = require('./googleAppInterface');
googleAppInterface = new GoogleAppInterface();

const SprinklerController = require('./sprinklerController');
sprinklerController = new SprinklerController();

googleAppInterface.shouldRunSprinkler().then(response => {
	if (response.shouldRun) {
		sprinklerController.runSprinkler(response.duration)
	} else {
		console.log('Sprinkler does not need to run today')
	}
})
