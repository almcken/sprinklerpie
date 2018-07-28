const config = require('../../config/config')
const osc = require('node-osc');
const oscServer = new osc.Server(config.osc.port, '0.0.0.0');
// Disable client for now
// const client = new osc.Client('192.168.0.101', 3333);

const messageTypeZoneMap = {
	'/1/toggle1': 'zone1',
	'/1/toggle2': 'zone2',
	'/1/toggle3': 'zone3',
	'/1/toggle4': 'zone4'
}
const relayListeners = [];

function TouchOSCController() {
	oscServer.on('message', function (message, rinfo) {
		const messageType = message[0];
		const messageValue = message[1];
		const zone = messageTypeZoneMap[messageType];
		if (zone) {
			relayListeners.forEach(listener => {
				listener({zone, messageValue});
			})
		}
	});
}

TouchOSCController.prototype.addRelayListener = function(listener) {
	relayListeners.push(listener);
}

module.exports = TouchOSCController;
