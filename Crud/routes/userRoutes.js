const express = require('express'); // Import express

const {home, createUser, getUsers, deleteUser, editUser } = require('../controllers/userController.js'); // Import home and createUser from userController.js

const router = express.Router();    // Create router

router.get('/', home)
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.put('/edituser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser)


module.exports = router;