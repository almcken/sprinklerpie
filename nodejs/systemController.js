const config = require('./config/config')

const GoogleAppInterface = require('./interfaces/google/googleAppInterface');
googleAppInterface = new GoogleAppInterface();

//const SprinklerController = require('./interfaces/sprinkler/sprinklerController');
//sprinklerController = new SprinklerController();

googleAppInterface.shouldRunSprinkler().then(response => {
	if (response.shouldRun) {
		//sprinklerController.runSprinkler(response.duration)
	} else {
		console.log('Sprinkler does not need to run today')
	}
})
