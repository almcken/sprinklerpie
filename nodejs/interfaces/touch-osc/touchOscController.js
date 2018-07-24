function configTouchOSC() {
	const osc = require('node-osc');
	const oscServer = new osc.Server(3000, '0.0.0.0');
	const client = new osc.Client('192.168.0.101', 3333);
	oscServer.on('message', function (message, rinfo) {
		switch (message[0]) {
			case '/1/toggle4':
				if (message[1] == '1') {
					console.log(message[0])
				} else {
					console.log(message[0])
				}
				break;
			case '/ping':
				console.log('ping')
				break;
		}
	});
}
