const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newSchema = Schema({
        ID:String,
        IA:String,
        BANE:String,
        AFER:String,
        Location:String, 
        Email:String,
        Password:String 
})
const databis = mongoose.model("bhlel",newSchema)

module.exports = databis
