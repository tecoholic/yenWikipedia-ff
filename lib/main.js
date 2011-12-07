// Importing the required modules
var pagemod = require("page-mod");
var data = require("self").data;
var store = require("simple-storage");
var request = require("request");
var widget = require("widget");
var panel = require("panel");

if (!store.storage.lang){
    store.storage.lang = 'ta'; // Default Lang is tamil when unset
}

pagemod.PageMod({
    include: ["http://www.google.*","https://www.google.*"],
    contentScriptWhen: "ready",
    contentScriptFile: [data.url("jquery-1.6.4.js"), data.url("background.js")],
    onAttach: function(worker){
        worker.on('message', function(data){
           /* GET the other language links for data.title */
            var req = request.Request({
                url : "http://en.wikipedia.org/w/api.php?action=query&titles=" + data.title +"&prop=langlinks&lllimit=500&format=xml",
                onComplete: function(response){ // send the data to background for processing
                    worker.postMessage({'index':data.index,'response':response.text, 'lang': store.storage.lang});
                }
            });
            req.get();
            });
        }
});

var opt_panel = panel.Panel({
    width: 240,
    height: 400,
    contentURL: data.url('widget/options.html'),
    contentScriptWhen: 'ready',
    contentScriptFile: [data.url('jquery-1.6.4.js'),
                        data.url('widget/ui/js/jquery-ui.1.8.2.js'),
                        data.url('widget/languages.js'),
                        data.url('widget/options.js')],
    onMessage: function(lang){
        // New language is set
        store.storage.lang = lang;
    },
    onShow: function(){
                this.postMessage(store.storage.lang); // Setting initial lang
    }
});

// Widget to show options panel
widget.Widget({
    id: 'yenWikipedia',
    label: 'Select yenWikipedia Language',
    contentURL: data.url('widget/icons/yenWiki_32x32.png'),
    contentScriptWhen: 'ready',
    panel: opt_panel,
});

