document
  .getElementById('removeDivButton')
  .addEventListener('click', function () {
    chrome.tabs.executeScript({ file: 'contentScript.js' });
  });
