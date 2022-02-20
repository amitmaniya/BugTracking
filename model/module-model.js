const mongoose = require("mongoose")


let UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        password:{
            type:String
        },
        role : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        }
})


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel