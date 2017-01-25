var stat = false;

function paper() {
    if(stat)return;
    flag();
    remove();
}

function remove(){
  chrome.browsingData.remove({"since":0}, {
    "cache": true,
  }, flag());
}

function flag(){
    stat = !stat;
    chrome.browserAction.setIcon({path:"icon-cache_"+stat+".png"});
}

chrome.browserAction.onClicked.addListener(paper);
paper();
