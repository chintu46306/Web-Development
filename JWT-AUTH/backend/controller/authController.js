const userModel = require("../model/userSchema"); // Import user model
const emailValidator = require("email-validator"); // Import email-validator module

const signup = async (req, res, next) => {
  // Create signup controller
  const { name, email, password, confirmPassword } = req.body; // Get data from request body
  console.log(name, email, password, confirmPassword); // Print data

  if (!name || !email || !password || !confirmPassword) {
    // Check if any field is empty
    return res.status(400).json({
      // Send response
      success: false, // Send success as false
      message: "Every fields are required", // Send error message
    });
  }

  const validEmail = emailValidator.validate(email); // Validate email
  if (!validEmail) {
    // Check if email is valid
    return res.status(400).json({
      // Send response
      success: false, // Send success as false
      message: "Please provide a valid email id", // Send error message
    });
  }

  if (password !== confirmPassword) {
    // Check if password and confirm password match
    return res.status(400).json({
      // Send response
      success: false, // Send success as false
      message: "Password and confirm password must be match", // Send error message
    });
  }

  try {
    const userInfo = userModel(req.body); // Create new user

    const result = await userInfo.save(); // Save user to database

    return res.status(200).json({
      // Send response
      success: true,
      data: result,
    });
  } catch (e) {
    if (e.code === 11000) {    
      // Check if email already exists
      return res.status(400).json({
        // Send response
        success: false, // Send success as false
        message: "Email already exists", // Send error message
      });
    }
    return res.status(400).json({
      // Send response
      success: false, // Send success as false
      error: e.message, // Send error message from catch block
    });
  }
};

const signin = async (req, res) => {
  // Create signin controller
  const { email, password } = req.body; // Get data from request body
  
  if (!email || !password) {
    // Check if any field is empty
    return res.status(400).json({
      // Send response
      success: false, // Send success as false
      message: "Every fields are required", // Send error message
    });
  }

  try {
    const user = await userModel // Validate email
      .findOne({
        email
      })
      .select("+password"); // Select password field  

      console.log(user);
      if (!user || user.password !== password) {
        console.log(user.password, password);
      // Check if user exists and password is correct
      return res.status(401).json({
        success: false,  
        message: "invalid credentials",
      })
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user
    })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}


const getUser = async (req, res, next) => {
  const userId = req.user.id;


  try {
      const user = await userModel.findById(userId);
      return res.status(200).json({
          success: true,
          data: user
      });
  }catch(e) {
       return res.status(400).json({
          success: false,
          message: e.message
       })
  }
}



module.exports = {
  signup,
  signin,
  getUser
};
