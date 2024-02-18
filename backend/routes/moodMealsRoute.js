const express = require("express");
const router = express.Router();

const {mood , meal , resto} = require("../models/MoodMeals");

//controller
const {createResto, createmeal ,createmood } = require("../controllers/createMoodMeal");
const {getAllMeals , getMoodMeals} = require("../controllers/getMoodMeals");

//Routes
router.post("/createresto" , createResto);
router.post("/createmeal" , createmeal);
router.post("/createmood" , createmood);

router.get("/getallmeals" , getAllMeals);
router.get("/getmoodmeals/:selectedmood" , getMoodMeals);


module.exports = router;