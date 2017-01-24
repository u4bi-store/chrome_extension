chrome.browserAction.onClicked.addListener(function(tab) {
  // 퍼미션 필요없음
  console.log('탭 url : ' + tab.url + '레드로 바꿈');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});