var status = false;

function paper() {
    fixIcon(true);

    setTimeout(function() {
      fixIcon(false);
    }, 200);
}

function fixIcon(bool){
  status = bool;
  chrome.browserAction.setIcon({path:"icon-cache_"+status+".png"});
}

chrome.browserAction.onClicked.addListener(paper);
paper();
