const path = require('path');                                        // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
require('dotenv').config({path:path.resolve(__dirname,'../.env')});  // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
const mongoose = require('mongoose'); // Import mongoose
const { Schema } = mongoose; // Destructure Schema from mongoose
const JWT = require('jsonwebtoken'); // Import jsonwebtoken module
const bcrypt = require('bcrypt'); // Import bcryptjs module


const userSchema = new Schema({   // Create userSchema
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLenght:[5,'Name must be atleast 3 characters long'],
        maxLenght:[20,'Name must be less than 20 characters long'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        select: false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpiryDate: {
        type: Date
    }
}, {
        timestamps : true 

});

userSchema.pre('save', async function(next){ // Create 'pre' save hook to hash password before saving user to database 
        if(!this.isModified('password'))  {
            return next();
        }  
        this.password = await bcrypt.hash(this.password, 10);                                                                                                               
        return next();
    })


    userSchema.methods = {
        jwtToken(){
            return JWT.sign(
                {id:this._id, email: this.email},
                process.env.SECRET, 
                {expiresIn: '24h'}
            )
        }
    }

const userModel = mongoose.model('User', userSchema); // Create User model
module.exports = userModel; // Export User model