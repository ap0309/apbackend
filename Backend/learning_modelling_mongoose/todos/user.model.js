//user.js
import mongoose from 'mongoose';

const Userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: True,
      unique: True,
      lowercase: True,
    },
    email: {
      type: String,
      required: True,
      unique: True,
      lowercase: True,
    },
    password: {
      type: String,
      require: [true, 'password must be required'],
    },
  },
  { timestamps: True }
);

export const user = mongoose.model('user', Userschema);