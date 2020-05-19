var oncee = true;
function fBrowserRedirect() {
	var ua = navigator.userAgent.toLowerCase();
	var Android = String(ua.match(/android/i)) == "android";
	var iPad = String(ua.match(/ipad/i)) == "ipad";
	var iPhone = String(ua.match(/iphone/i)) == "iphone";
	if (!Android && !iPad && !iPhone) {
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'body {background-image: url(img/snow.jpg);}';
		document.head.appendChild(style)
	} else {
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'body {background-image: url(img/yinghua.jpg);}';
		document.head.appendChild(style)
	}
}
fBrowserRedirect();
window.onresize = function() {
	fBrowserRedirect();
	console.log("1");
}