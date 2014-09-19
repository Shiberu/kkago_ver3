// create youtube player
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('kkago-video', {
		height: '270',
		width: '400',
		videoId: 'QGiD9Qm5CXY',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// autoplay video
function onPlayerReady(event) {
}

// when video changes state
function onPlayerStateChange(event) {
  if (event.data == 1){
    $("#playing-icon").data('bounce', true);
	$("#play-button-icon").addClass("playing");
  }
  else if (event.data == 2 || event.data== -1){
  	$("#playing-icon").data('bounce', false);
	$("#play-button-icon").removeClass("playing");
  }
}