document.addEventListener('DOMContentLoaded', function() {
				function audioAutoPlay() {
					var audio = document.getElementById('bg-music');
					audio.play();
					document.addEventListener("WeixinJSBridgeReady", function() {
						audio.play();
					}, false);
				}
				audioAutoPlay();
			});