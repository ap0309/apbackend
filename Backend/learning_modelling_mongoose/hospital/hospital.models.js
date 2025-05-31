import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema
(
    {
        name : {
            type : String ,
            required : true,
            trim: true
        },
        addressline1: {
            type : String,
            required : true,
            trim: true
        },
        addressline2: {
            type : String,
            trim: true
        },
        addressline2: {
            type : String,
            required : true,
        },
        city: {
            type : String,
            required : true,
            trim: true
        },
        pincode: {      
            type : String,
            required : true,
            trim: true
        },
        specialization:[ {   
            type : String,
            required : true,
        }],
        contactNumber : {
            type : String,
            required : true,
            trim: true
        }
    }, {timestamps: True}

);

export const Hospital = mongoose.model('Hospital', HospitalSchema);