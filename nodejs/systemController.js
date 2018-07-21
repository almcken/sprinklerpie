const GoogleAppInterface = require('./interfaces/google/googleAppInterface');
googleAppInterface = new GoogleAppInterface();

const SprinklerController = require('./interfaces/sprinkler/sprinklerController');
sprinklerController = new SprinklerController();

/*
const AudioPlayer = require('./interfaces/audioPlayer')
audioPlayer = new AudioPlayer();
audioPlayer.systemsGo()
*/

googleAppInterface.shouldRunSprinkler().then(response => {
	if (response.shouldRun) {
		sprinklerController.runSprinkler(response.duration)
	} else {
		console.log('Sprinkler does not need to run today')
	}
})
