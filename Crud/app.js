const path = require('path'); // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai

require('dotenv').config({path:path.resolve(__dirname,'./.env')});  // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai

const exprees = require('express');  // ye line isliye likhi hai kyunki humne .env file ko config kia hai aur usme humne port aur mongo_uri ko store kia hai
const cors = require("cors")


const connectToDb = require('./config/db.js');

const app = exprees();

// Express middleware
app.use(exprees.json());
app.use(exprees.urlencoded({extended:true}));

// cors
app.use(cors());

// init connection to db
connectToDb()

const userRoutes = require('./routes/userRoutes.js');

app.use('/',userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});

//exporting app module
module.exports = app;