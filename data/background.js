var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");
var lang = 'ta';

wikiResults.each(function(index) {
    var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");
    self.postMessage({ 'index' : index, 'title' : title});
});

self.onMessage = function(data){
    $(data.response).find("ll[lang='" + lang + "']").each(function() {
            appendLink(wikiResults[data.index],$(this).text(),lang);
    });
}

function appendLink(element, title, lang){
    $(element).after("<a class='extra-wikilink' href='http://" + lang + ".wikipedia.org/wiki/" + data + "'>" + data + "</a>");
    console.log('Injecting..'+data);
}

