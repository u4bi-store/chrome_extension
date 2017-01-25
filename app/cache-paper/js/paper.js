var ctrl;
var dataArray = [], btnArray = [];
var data =[
    {name: "응용 프로그램 캐시" ,key: "appcache",    value: false},
    {name: "캐시된 이미지,파일" ,key: "cache",       value: false},
    {name: "쿠키"            ,key: "cookies",     value: false},
    {name: "다운로드 기록"     ,key: "downloads",   value: false},
    {name: "파일 시스템즈"     ,key: "fileSystems", value: false},
    {name: "폼 데이터"        ,key: "formData",    value: false},
    {name: "히스토리 기록"     ,key: "history",     value: false},
    {name: "indexedDB"      ,key: "indexedDB",   value: false},
    {name: "로컬스토리지"      ,key: "localStorage",value: false},
    {name: "플러그인 데이터"   ,key: "pluginData",  value: false},
    {name: "비밀번호"         ,key: "passwords",   value: false},
    {name: "webSQL"         ,key: "webSQL",      value: false}
  ];


var Control = function(){};

Control.prototype = {
  fixCheck : function(bool){
    for(var i=0; i<data.length; i++){
      data[i].type = bool;
      dataArray[i].checked = data[i].type;
      this.save(data[i].key, data[i].type);
    }
  },
  save : function(key, value){
    localStorage.setItem(key,value);
  }
};


document.addEventListener('DOMContentLoaded', function () {
  ctrl = new Control();
  
  for(var i=0; i<data.length; i++){
    var temp = localStorage[data[i].key];
    if(temp != undefined && temp != false)data[i].value = JSON.parse(temp);
  }

  var box = document.getElementById('box');
  box.innerHTML='인터넷 사용기록 삭제';
  
  var ul = document.createElement('ul');
  box.appendChild(ul);

  for(var i=0; i<data.length; i++){
    
      var li = document.createElement('li');
      ul.appendChild(li);
    
      var label = document.createElement('label');
      label.innerHTML=data[i].name;
      li.appendChild(label);

      dataArray[i] = document.createElement("input");
      dataArray[i].setAttribute("type", "checkbox");
      dataArray[i].setAttribute("value", data[i].key);
      dataArray[i].checked = data[i].value;
      dataArray[i].onclick=function(e){
        ctrl.save(e.target.attributes[1].nodeValue, e.target.checked);
      };
      
      label.appendChild(dataArray[i]);
  }
  
  var removed=document.getElementById('removed');
  var checked=document.getElementById('checked');
  
  removed.onclick=function(){
    ctrl.fixCheck(false);
  };
  
  checked.onclick=function(){
    ctrl.fixCheck(true);
  };
  
});