var player = require('play-sound')(opts = {})

function AudioPlayer() {

}

AudioPlayer.prototype.systemsGo = function() {
	console.log('playing audio')
	player.play('./resources/systems_go.wav', function(err){
	  if (err) throw(err);
	})	
}

module.exports = AudioPlayer;
