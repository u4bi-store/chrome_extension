document.addEventListener('DOMContentLoaded', function () {
  console.log('dom conn init');

  var data =[
    {name: "appcache",    type: true},
    {name: "cache",       type: true},
    {name: "cookies",     type: true},
    {name: "downloads",   type: true},
    {name: "fileSystems", type: true},
    {name: "formData",    type: true},
    {name: "history",     type: true},
    {name: "indexedDB",   type: true},
    {name: "localStorage",type: true},
    {name: "pluginData",  type: true},
    {name: "passwords",   type: true},
    {name: "webSQL",      type: true}
  ];
  
  var dataArray = [];
  
  var box = document.getElementById("box");
  box.innerHTML='web-data-paper';
  
  for(var i=0; i<data.length; i++){

      var label = document.createElement("label");
      label.innerHTML='<br>'+data[i].name;
      box.appendChild(label);

      dataArray[i] = document.createElement("input");
      dataArray[i].setAttribute("type", "checkbox");
      dataArray[i].setAttribute("value", data[i].name);
      dataArray[i].checked = data[i].type;

      label.appendChild(dataArray[i]);

  }
});
