/* ************************
 * yenWiikipedia-ff
 * File: background.js
 * ************************/

var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");
var lang = 'ta';

console.log("background script called");

wikiResults.each(function(index) {
    var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");
    console.log('Processing...');
    console.log(title);

    getLocalTitle( title , function(data){

    console.log('Callback ... calling appendlink for '+data.title);

    appendLink(wikiResults[index], data.title, data.lang);
    });
});

function getLocalTitle( title , callback ){
    var url = "http://en.wikipedia.org/w/api.php?action=query&titles=" + title +"&prop=langlinks&lllimit=500&format=xml";
    console.log('getting url: ' + url);

    /* Insert the api request and collback calling code here */

}

function appendLink(element, title, lang){
    $(element).after("<a class='extra-wikilink' href='http://" + lang + ".wikipedia.org/wiki/" + data + "'>" + data + "</a>");
    console.log('Injecting..'+data);
}

