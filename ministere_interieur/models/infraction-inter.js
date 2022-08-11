const mongoose= require('mongoose')



const infractionSchema = new mongoose.Schema({
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
    infraction : {
        type : String,
        required: false
    }

})
module.exports = mongoose.model('infraction-inter',infractionSchema) 