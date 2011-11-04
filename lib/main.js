/* **************************************************
 * yenWikipedia
 * File: main.js
 * **************************************************/

var pagemod = require("page-mod");
var data = require("self").data;
var store = require("simple-storage");

/* deafault language of tamil
 * TODO: add multiple language through options page
 */
store.storage.lang = "ta";

pagemod.PageMod({
	include: ["http://www.google.*","https://www.google.*"],
	contentScriptWhen: "ready",
	contentScriptFile: [data.url("injector.js"), data.url("jquery-1.6.4.js")],
	onAttach: function(){
		this.postMessage(store.storage.lang);
	}
		
});



