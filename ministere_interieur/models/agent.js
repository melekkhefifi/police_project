const mongoose= require('mongoose')



const agentSchema = new mongoose.Schema({
    cin: {
    type: Number,
    required : true
    },
    firstName :{
        type: String,
        required :true
    },
    lastName : {
        type : String,
        required : true
    },
    
    password : {
        type : String,
        required : true
    }


})
module.exports = mongoose.model('agent',agentSchema) 