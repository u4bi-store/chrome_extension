var cache_paper = (function (){
    var instance;

    function init(){
        return{
          stat : false,
          on: function(){
             instance.remove();
             instance.flag();
          },
          remove : function(){
              chrome.browsingData.remove(
                  {"since": 0},
                  {"cache": true}
              , instance.flag);
          },
          flag : function(){
              instance.stat = !instance.stat; 
              chrome.browserAction.setIcon(
                  {path: "icon-cache_"+instance.stat+".png"}
              );
          }
        };
    }
    return {
      getInstance: function(){
        if(!instance)instance = init();
        return instance;
      }
    }
})();

var paper = cache_paper.getInstance();
chrome.commands.onCommand.addListener(paper.on);

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'lib/riot-compiler.min.js'
    }, function() {
        chrome.tabs.executeScript({file: 'js/paper.js'});
    });
});
