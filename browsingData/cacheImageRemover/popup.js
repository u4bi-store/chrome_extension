var PopupController = function () {
  this.handleClick_.bind(this);
};

PopupController.prototype = {
  /* alert msg */
  handleCallback_: function () {
    var success = document.createElement('div');
    success.classList.add('overlay');
    success.setAttribute('role', 'alert');
    success.textContent = '브라우저내 데이터가 모두 성공적으로 삭제되었습니다.';
    document.body.appendChild(success);
    
    /* 오버레이 표출*/
    setTimeout(function() { success.classList.add('visible'); }, 10);
    /* 4초후 오버레이 끄기*/
    setTimeout(function() {
      if (close === false) success.classList.remove('visible');
      else window.close();
    }, 4000);
  },
  
  /* 앱캐시 지우기 호출*/
  handleClick_: function () {
    chrome.browsingData.remove({ "since" : removal_start }, {
      "appcache": true
    }, this.handleCallback_.bind(this)); /*https://msdn.microsoft.com/ko-kr/library/hh673545(v=vs.85).aspx */
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});
