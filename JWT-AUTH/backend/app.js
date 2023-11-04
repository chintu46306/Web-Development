const express = require('express');     // Import express

const app = express(); 
const authRouter = require('./router/authRoute');              // Create express app
const databaseconnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');


databaseconnect();                      // Call databaseconnect function

app.use(express.json());                // Use express.json() middleware to parse request body
app.use(cookieParser());

app.use('/api/auth/', authRouter);

app.use('/', (req, res) => {            // Create route  agar koi / dega to ye chalega
    res.status(200).json({data: 'JWTauth server --updated'});
});


module.exports = app;                   // Export app