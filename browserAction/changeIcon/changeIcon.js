var min = 1;
var max = 5;
var current = min;

function updateIcon() {
  chrome.browserAction.setIcon({path:"images/icon" + current + ".png"});
  current++;
  
  if (current > max) current = min;
  
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();