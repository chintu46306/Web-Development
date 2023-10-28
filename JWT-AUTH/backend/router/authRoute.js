const express = require('express');    // Import express

// import signup from authController.js
const {signup} = require('../controller/authController.js');

const authRouter = express.Router();   // Create router

authRouter.post('/signup', signup);     // Create signup route


module.exports = authRouter;           // Export router 