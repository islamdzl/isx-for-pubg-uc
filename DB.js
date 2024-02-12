const e = require('cors')
const mongooes = require('mongoose')
mongooes.connect('mongodb+srv://islam-01:SoedoK11wFfu0Ns2@atlascluster.bkylx5y.mongodb.net/?retryWrites=true&w=majority')//SoedoK11wFfu0Ns2
.then(()=>{
    console.log("islam connected")
}).catch((ererr)=>{
    console.log(ererr) 
})
