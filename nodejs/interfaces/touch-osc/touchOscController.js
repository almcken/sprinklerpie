const config = require('../../config/config')
const osc = require('node-osc');
const oscServer = new osc.Server(config.osc.port, '0.0.0.0');
// Disable client for now
// const client = new osc.Client('192.168.0.101', 3333);

const relay1Listeners = [];

function TouchOSCController() {
	oscServer.on('message', function (message, rinfo) {
		const messageType = message[0];
		switch (messageType) {
			case '/1/toggle4':
				const messageValue = message[1];
				relay1Listeners.forEach(listener => {
					listener(messageValue);
				})
				break;
			case '/ping':
				// Use the ping however necessary, if at all
				break;
		}
	});
}

TouchOSCController.prototype.addRelay1Listener = function(listener) {
	relay1Listeners.push(listener);
}

module.exports = TouchOSCController;
