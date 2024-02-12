var data = []
const ID = localStorage.getItem('ID')
let apiserh = new XMLHttpRequest()
   apiserh.open('POST','https://'+location.host+ '/apiserh')
   apiserh.setRequestHeader("Accept","application/json")
   apiserh.setRequestHeader("Content-Type","application/json")
   apiserh.onreadystatechange=function(){
     if (apiserh.readyState == 4){
        data = JSON.parse(apiserh.responseText).D
        }
      }
    
    var dataID=`{"ID":"${ID}"}`
    apiserh.send(dataID)
setInterval(function() {
  console.log(data)
    if (data.AFER  == "20xFree") {
      document.getElementById('h1').style.display='block'
    }else{
      document.getElementById('h1').innerText='Connecting to serverdata...'
      document.getElementById('h1').style.display='block'
    }
},2000)