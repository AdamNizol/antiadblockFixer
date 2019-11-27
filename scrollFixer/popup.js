document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#enableScrollBtn').addEventListener('click', onclick, false)
  document.querySelector('#bruteForceEnableScrollBtn').addEventListener('click', bruteForce, false)


  function onclick(msg) {
    chrome.tabs.query({currentWindow: true, active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'fixScrolling')
    })
  }

  function bruteForce(msg) {
    chrome.tabs.query({currentWindow: true, active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'bruteForce')
    })
  }
}, false)
