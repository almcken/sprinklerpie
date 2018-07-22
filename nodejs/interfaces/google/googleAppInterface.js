
function GoogleAppInterface() {

}

GoogleAppInterface.prototype.shouldRunSprinkler = function() {
	return Promise.resolve({shouldRun: true, duration: 1})
}

module.exports = GoogleAppInterface;
