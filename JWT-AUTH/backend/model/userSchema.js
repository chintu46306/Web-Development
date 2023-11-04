require('dotenv').config(); // Import dotenv module
const mongoose = require('mongoose'); // Import mongoose
const { Schema } = mongoose; // Destructure Schema from mongoose
const JWT = require('jsonwebtoken'); // Import jsonwebtoken module


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

    userSchema.methods = {
        jwtToken(){
            return JWT.sign(
                {id:this._id, email: this.email},
                process.env.SECRET, 
                {expiresIn: '24h'}
            )
        }
    }

console.log(process.env.SECRET);
const userModel = mongoose.model('User', userSchema); // Create User model
module.exports = userModel; // Export User model