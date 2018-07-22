
const GoogleApi = require('./googleApi');

function GoogleAppInterface() {
	googleApi = new GoogleApi();
}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	googleApi.test()
	return Promise.resolve({shouldRun: true, duration: 1})
}

module.exports = GoogleAppInterface;

/*const googleAppInterface = new GoogleAppInterface()
googleAppInterface.shouldRunSprinkler()
*/