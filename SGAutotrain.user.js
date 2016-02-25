// ==UserScript==
// @name         SG Autotrain
// @namespace    http://faragona.com/
// @version      0.1
// @description  try to take over the GAs!
// @author       Faragona
// @match        http://www.steamgifts.com/giveaway/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

if (document.getElementsByClassName("sidebar__entry-insert").length == 1) {
    document.getElementsByClassName("sidebar__entry-insert")[0].click();
}

function Next() {
	var links = document.getElementsByClassName('markdown--resize-body')[0].getElementsByTagName('a');
	var galinks = [];

	for (i=0; i < links.length; i++) {
		if (links[i].getAttribute('href').substring(0,35) == 'http://www.steamgifts.com/giveaway/'){
			galinks.push(links[i].getAttribute('href'));
		}
	}

	for (k=1; i < galinks.length; i++) {
		var a = document.createElement("a");
		a.href = galinks[i];
		var evt = document.createEvent("MouseEvents");
		//the tenth parameter of initMouseEvent sets ctrl key
		evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
		a.dispatchEvent(evt);
	}

	window.location = links[0].getAttribute('href');
}
var error = document.getElementsByClassName('sidebar__error')[0];
if ( error == undefined || error.innerHTML.substring(41) == 'Exists in Account' || error.innerHTML.substring(41,46) == 'Level') {
	setInterval(Next,4000);
}
else {
	if (error[0].innerHTML.substring(41) == 'Not Enough Points') {
		setTimeout(function(){window.location.reload()},900000)
	}
}
