var flag = false;

function paper() {

  chrome.browserAction.setIcon({path:"icon-cache_"+flag+".png"});
  flag = !flag;
}

chrome.browserAction.onClicked.addListener(paper);
paper();
