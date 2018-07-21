
function GoogleAppInterface() {

}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	return Promise.resolve({shouldRun: true, duration: 5})
}

module.exports = GoogleAppInterface;
