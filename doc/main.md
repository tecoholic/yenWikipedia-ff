The main module is used for:
* getting the API response from wikipedia
* showing the options panel
* adding the content script background.js to the google page
* send the language option to the content script
* sending the wikipedia API response to the contentScript

The background.js :
* scraps all the wikipedia links in the google search results and send the title to main.js
* recieves the xml respose from main.js and injects the preferred language link to the Google result page
