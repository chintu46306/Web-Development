require('dotenv').config();     // Import dotenv module to read .env file
const PORT = process.env.PORT || 3001;

const app = require('./app');  // Import app from app.js

 // import signup from authController.js
// const signup = require('./controller/authController');



app.listen(PORT, () => {        // Start servernode "d:\PW skill\JWT-AUTH\backend\app.js"
    console.log(`Server listening at port ${PORT}`);
})