
const GoogleApi = require('./googleApi');

function GoogleAppInterface() {
	googleApi = new GoogleApi();
}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	return googleApi.shouldRunSprinkler();
}

module.exports = GoogleAppInterface;
