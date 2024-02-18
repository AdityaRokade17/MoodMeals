const express =require("express");
const router = express.Router();

const {eatsResponse} = require("../controllers/eatsGPT")
//const {auth} = require("../middlewares/auth");

router.post("/getresponse",eatsResponse);

module.exports = router;