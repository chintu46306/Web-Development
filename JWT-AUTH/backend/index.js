const path = require('path'); // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
require('dotenv').config({path:path.resolve(__dirname,'../.env')});  // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
const PORT = process.env.PORT || 3001;

const app = require('./app');  // Import app from app.js

 // import signup from authController.js
// const signup = require('./controller/authController');



app.listen(PORT, () => {        // Start servernode "d:\PW skill\JWT-AUTH\backend\app.js"
    console.log(`Server listening at port ${PORT}`);
})