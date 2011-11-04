/* ************************
 * yenWiikipedia-ff
 * File: background.js
 * ************************/

var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");
var lang = 'ta';

console.log("background script called");

wikiResults.each(function(index) {
    var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");

    console.log(title);

    var url = "http://en.wikipedia.org/w/api.php?action=query&titles=" + title +"&prop=langlinks&lllimit=500&format=xml";

    /* Insert the api request and collback calling code here */
    $.get(url, dataType= 'xml', function(data){
        console.log('get function');
    });


    getLocalTitle( title , function(data){

    console.log('Callback ... calling appendlink for '+data.title);

    appendLink(wikiResults[index], data.title, data.lang);
    });
});

function getLocalTitle( title , callback ){
    var url = "http://en.wikipedia.org/w/api.php?action=query&titles=" + title +"&prop=langlinks&lllimit=500&format=xml";
    console.log('URL:' + url);

    /* Insert the api request and collback calling code here */
    jQuery.ajax(url, dataType= 'xml', function(data){
        console.log('get function');
    });

}

function appendLink(element, title, lang){
    $(element).after("<a class='extra-wikilink' href='http://" + lang + ".wikipedia.org/wiki/" + data + "'>" + data + "</a>");
    console.log('Injecting..'+data);
}

