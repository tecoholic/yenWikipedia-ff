/* **************************************************
 * yenWikipedia
 * File: main.js
 * **************************************************/

var pagemod = require("page-mod");
var data = require("self").data;
var store = require("simple-storage");
var request = require("request");

/* deafault language of tamil
 * TODO: add multiple language through options page
 */
store.storage.lang = "ta";

pagemod.PageMod({
    include: ["http://www.google.*","https://www.google.*"],
    contentScriptWhen: "ready",
    contentScriptFile: [data.url("jquery-1.6.4.js"), data.url("background.js")],
    onAttach: function(worker){
        worker.on('message', function(data){
            console.log(data.index);
            console.log(data.title);
            /* GET the other language links */
            var req = request.Request({
                url : "http://en.wikipedia.org/w/api.php?action=query&titles=" + data.title +"&prop=langlinks&lllimit=500&format=xml",
                onComplete: function(response){
                    console.log('Data recieved for '+data.title);
                    worker.postMessage({'index':data.index,'response':response});
                }
            });
            req.get();          
            });
        }
});

