var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");

wikiResults.each(function(index) {
    var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");
    self.postMessage({ 'index' : index, 'title' : title});
});

self.on('message', function(data){
    var xmldoc = $.parseXML(data.response);
    $(xmldoc).find("ll[lang='" + data.lang + "']").each(function() {
            appendLink(wikiResults[data.index],$(this).text(),data.lang);
    });
});

function appendLink(element, title, lang){
    var linkURL = "http://"+lang+".wikipedia.org/wiki/"+title;
    var style = "margin-left: 5px;"
    $(element).after($("<a>", { class: "extra-wikilink", href: linkURL, text: title, style: style}));
}

