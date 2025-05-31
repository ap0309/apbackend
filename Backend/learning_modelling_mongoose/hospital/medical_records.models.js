import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema
(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
            required: True
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor',
            required: True
        },
        diagnosis: {
            type: String,
            required: True
        },
        treatment: {
            type: String,
            required: True
        }
    }, {timestamps: True}

);

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);