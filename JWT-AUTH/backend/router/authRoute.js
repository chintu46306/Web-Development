const express = require('express');    // Import express
const jwtAuth = require('../middleware/jwtAuth.js'); // Import jwtAuth middleware
const authRouter = express.Router();   // Create router

// import signup from authController.js
const {signup, signin, getUser} = require('../controller/authController.js');

authRouter.post('/signup', signup);     // Create signup route
authRouter.post('/signin', signin);     // Create signin route
authRouter.get('/user', jwtAuth, getUser);

module.exports = authRouter;           // Export router 