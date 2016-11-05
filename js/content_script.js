
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "js/wayh.js"});
  chrome.tabs.insertCSS(null, {file: "css/wayh.css"});
});

