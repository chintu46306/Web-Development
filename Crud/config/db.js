const path = require("path");   // ye line likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });  // kyun ki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai

const mongoose = require("mongoose"); 

const connectToDb = async () => {
  //  to do : improve this try catch lagana hai
  console.log("connecting to DB");
  mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
      //try catch k jagah pe ye v use kr skte hai
      console.log(`connected to DB: ${conn.connection.host}
    `);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
}


module.exports = connectToDb;
