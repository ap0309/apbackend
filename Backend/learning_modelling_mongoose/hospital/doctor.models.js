import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema
(
    {

    }, {timestamps: True}

);

export const Doctor = mongoose.model('Doctor', DoctorSchema);