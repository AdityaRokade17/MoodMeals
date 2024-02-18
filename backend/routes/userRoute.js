const express =require("express");
const router = express.Router();

const User = require("../models/User");

//Controller and middleware
//import

const {login, signup} = require("../controllers/userController")


//Routes
router.post("/login", login);
router.post("/signup" , signup);

module.exports = router;