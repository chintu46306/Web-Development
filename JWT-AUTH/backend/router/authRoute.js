const express = require('express');    // Import express
const {signup, signin, getUser, logout} = require('../controller/authController.js');
const jwtAuth = require('../middleware/jwtAuth.js'); // Import jwtAuth middleware
const authRouter = express.Router();   // Create router

// import signup from authController.js

authRouter.post('/signup', signup);     // Create signup route
authRouter.post('/signin', signin);     // Create signin route
authRouter.get('/user', jwtAuth, getUser);    //here we are using jwtAuth middleware for authentication and getUser for getting user data from database and send it to client side 
authRouter.get('/logout', jwtAuth, logout);


module.exports = authRouter;           // Export router 