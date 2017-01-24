function paper() {
  alert('paper test');
}

chrome.browserAction.onClicked.addListener(paper);
paper();