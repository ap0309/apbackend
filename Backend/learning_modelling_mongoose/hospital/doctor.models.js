import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema
(
    {
        name : {
            type : String ,
            required : true,
        },
        salary : {
            type : String,
            required : true,
        },
        specialization : {
            type : String,
            required : true,
            enum : ['Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Psychiatrist', 'Surgeon', 'General Practitioner']
        },
        experience : {
            type : Number,
            required : true,
            min : 0
        },
        qualifications : {  
            type : String,
            required : true,
            trim: true
        },
        worksin : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital',
                required: true
            }
        ],
        contactNumber : {
            type : String,
            required : true,
            trim: true
        },

    }, {timestamps: True}

);

export const Doctor = mongoose.model('Doctor', DoctorSchema);