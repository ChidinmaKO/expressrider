// Fetch SVG Sprite
var url = 'dist/svgdefs.svg', c = new XMLHttpRequest(), $ = jQuery;
c.open('GET', url, true);
c.setRequestHeader('Content-Type', 'text/xml');
c.send();
function ready(cb){
	/in/.test(document.readyState) ? setTimeout(ready.bind(null, cb), 9) : cb();
}
ready(function(){
	"use strict";
	// Append SVG
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild);
});
