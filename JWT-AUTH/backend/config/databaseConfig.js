const mongoose = require('mongoose');  // Import mongoose
const path = require("path");   // ye line likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });  // kyun ki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai

const MONGODB_URL = process.env.MONGODB_URL;     // Create MONGODB_URI

const databaseconnect = () => {         // Create databaseconnect function
        mongoose                // Connect to database
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to database: ${conn.connection.host}`))  // Print host name
        .catch((err) => console.log(err.message));  // Print error message

}

module.exports = databaseconnect;   // Export databaseconnect function







