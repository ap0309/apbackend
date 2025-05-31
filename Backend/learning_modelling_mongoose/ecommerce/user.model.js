import mongoose from "mongoose"

const userSchema  = new mongoose.Schema
(
  {
    username:{
      type : String,
      required : True,
      unique : True,
      lowercase  : True
    },
    email:{
      type : String,
      required : True,
      unique : True,
      lowercase  : True
    },
    password:{
      type : String ,
      requird : True 
    }

  },{timestamps : True}
)

export const User = mongoose.model("User",userSchema);
