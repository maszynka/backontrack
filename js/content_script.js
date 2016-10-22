
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "js/wyah.js"});
  chrome.tabs.insertCSS(null, {file: "css/wyah.css"});
});

