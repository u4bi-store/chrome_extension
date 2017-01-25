var data = [];
var dataArray = [];
var btnArray = [];

document.addEventListener('DOMContentLoaded', function () {
  console.log('dom conn init');

  data =[
    {name: "appcache"    ,key: "appcache",    value: true},
    {name: "cache"       ,key: "cache",       value: true},
    {name: "cookies"     ,key: "cookies",     value: true},
    {name: "downlods"    ,key: "downloads",   value: true},
    {name: "fileSystems" ,key: "fileSystems", value: true},
    {name: "formData"    ,key: "formData",    value: true},
    {name: "history"     ,key: "history",     value: true},
    {name: "indexedDB"   ,key: "indexedDB",   value: true},
    {name: "localStorage",key: "localStorage",value: true},
    {name: "pluginData"  ,key: "pluginData",  value: true},
    {name: "passwords"   ,key: "passwords",   value: true},
    {name: "webSQL"      ,key: "webSQL",      value: true}
  ];
  
  var box = document.getElementById('box');
  box.innerHTML='web data paper';
  
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
      dataArray[i].onclick=function(e){
        save(e.target.attributes[1].nodeValue, e.target.checked);
      };
      dataArray[i].checked = data[i].type;

      label.appendChild(dataArray[i]);
      var removed=document.getElementById('removed');
      var checked=document.getElementById('checked');

      removed.onclick=function(){ fixCheck(false)};
      checked.onclick=function(){ fixCheck(true)};
  }
  
});

function fixCheck(bool){
  for(var i=0; i<data.length; i++){
    data[i].type = bool;
    dataArray[i].checked = data[i].type;
    save(data[i].key, data[i].type);
  }
}

function save(key, value){
  console.log(key+' '+value);
}
