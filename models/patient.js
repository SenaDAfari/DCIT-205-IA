
const mongoose = require('mongoose')
const patientSchema = mongoose.Schema(
    {
        PatienID:{
            type:String,
            required: true, 
        },
        Surname:{
            type:String,
            required:true, 
        },
        Othernames:{
            type: String,
            required:true, 
        },
        Gender:{
            type: String,
            required:true, 
        },
        Phonenumber:{
            type: Number,
            required: true, 
        },
        Address:{
            type: String,
            required: true, 
        },
        Emergencyname: {
            type: String,
            required:true, 
        },
        Contact:{
            type: Number,
            required: true, 
        },
        Emergencyname:{
            type: Number,
            required: true,
        },
        Relationship:{
            type: String,
            required:true,
        }

    }
)
const Patient = mongoose.model("Patient", patientSchema )


module.exports= Patient;