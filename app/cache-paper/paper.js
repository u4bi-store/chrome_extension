var cache_paper = (function (){
    var instance;
    var stat = false;
    function init(){
        return{
          stat: stat,
          on: function(){
            alert('on');
          },
          remove : function(){
            alert('remove');
          },
          flag : function(){
              alert('flag');
          }
        };
    }
    return {
      getInstance: function(){
        if(!instance){
          instance = init();
        }
        return instance;
      }
    }
})();

var paper = cache_paper.getInstance();

chrome.browserAction.onClicked.addListener(function(){
    alert('stat : '+ paper.stat);
    paper.on();
    paper.remove();
    paper.flag();
});
