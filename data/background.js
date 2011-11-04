/* ************************
 * yenWiikipedia-ff
 * File: background.js
 * ************************/

self.on("message", function(lang){
	var wikiResults = $(".l[href*='en.wikipedia.org/wiki/']");

	wikiResults.each(function(index) {
		var title = $(this).attr("href").replace("http://en.wikipedia.org/wiki/", "");
		var url = "http://en.wikipedia.org/w/api.php?action=query&titles=" + title + 
				"&prop=langlinks&lllimit=500&format=xml";
		
});	

