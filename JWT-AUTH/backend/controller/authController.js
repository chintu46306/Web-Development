const signup = (req, res, next) => {        // Create signup controller
    const {name, email, password , confirmPassword} = req.body;  // Get data from request body
    console.log(name, email, password , confirmPassword);        // Print data
    return res.status(200).json({                                // Send response
        success: true,
        data : {

        }
    })
}

module.exports = {
    signup
}