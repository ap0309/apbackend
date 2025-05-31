import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema
(
    {
        name: {
            type : String,
            required : True,
            trim: True
        },
        age: {
            type : Number,
            required : True,
            min: 0
        },
        address : {
            type : String,
            required : True,
            trim: True
        },
        diagonesdCondition: {
            type : String,
            required : True,
            trim: True
        },
        contactNumber: {
            type : String,
            required : True,
            trim: True
        },
        BloodGroup: {
            type : String,
            enum : ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            required : True,
            trim: True
        },
        gender: {
            type : String,
            enum : ['Male', 'Female', 'Other'],
            required : True,
        }, 
        admittedIn : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
        medicalHistory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MedicalHistory',
            required: True
        }
    }, {timestamps: True}

);

export const Patient = mongoose.model('Patient', PatientSchema);