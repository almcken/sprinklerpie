
const GoogleApi = require('./googleApi');

function GoogleAppInterface() {
	googleApi = new GoogleApi();
}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	googleApi.shouldRunSprinkler().then(result => {
		console.log(result)
	})
	return Promise.resolve({shouldRun: true, duration: 1})
}

module.exports = GoogleAppInterface;
