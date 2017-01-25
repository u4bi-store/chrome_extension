var status = false;

function paper() {
    fixIcon(true);
    remove();

    var success = document.createElement('div');
    document.body.appendChild(success);
    alert(success);
}

function remove(){
  chrome.browsingData.remove({"since":0}, {
    "cache": true,
  }, fixIcon(false));
}

function fixIcon(bool){
  status = bool;
  chrome.browserAction.setIcon({path:"icon-cache_"+status+".png"});
}

chrome.browserAction.onClicked.addListener(paper);
paper();
