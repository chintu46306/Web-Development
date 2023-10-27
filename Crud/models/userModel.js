const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({ // Schema is a class
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true, // trim is used to remove the white spaces from the beginning and the end of the string
        maxlength:[32,"Name can not be more than 32 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
})        

module.exports = mongoose.model("User",userSchema) // User is the name of the collection in the database