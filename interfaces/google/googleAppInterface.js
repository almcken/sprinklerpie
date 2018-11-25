
const GoogleApi = require('./googleApi');

function GoogleAppInterface() {
	googleApi = new GoogleApi();
}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	return googleApi.shouldRunSprinkler();
}

GoogleAppInterface.prototype.getLightStatus = function() {
	return googleApi.getLightStatus();
}

module.exports = GoogleAppInterface;
