init();

function init(){
  
  /*브라우저가 탭에 클릭을 가할 때 호출함*/
  chrome.browserAction.onClicked.addListener(function(tab) {
    /* 호스트나 퍼미션 권한이 필요없음 */
    console.log('클릭함 해당 탭의 url : '+tab.url);
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="blue"'
    });
    console.log('배경을 블루로 바꿈');
    
  });
}