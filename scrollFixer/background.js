chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({currentWindow: true, active: true},
  function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'unblock')
  })
});
