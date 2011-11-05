var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");
var lang = 'ta';

wikiResults.each(function(index) {
    var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");
    self.postMessage({ 'index' : index, 'title' : title});
});

self.on('message', function(data){
    console.log(data.index);
    var xmldoc = $.parseXML(data.response);
    $(xmldoc).find("ll[lang='" + lang + "']").each(function() {
            appendLink(wikiResults[data.index],$(this).text(),lang);
    });
});

function appendLink(element, title, lang){
    $(element).after("&nbsp;&nbsp;<a class='extra-wikilink' href='http://" + lang + ".wikipedia.org/wiki/" + title + "'>" + title + "</a>");
    console.log('Injecting..' + title);
}

