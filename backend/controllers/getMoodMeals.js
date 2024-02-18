const {mood , meal , resto } = require("../models/MoodMeals");

exports.getAllMeals = async (req, res) => {

    try{

        const meals = await meal.find();
        console.log(meals);
        return res.json({
            meals
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error while fetching meals"
        })
    }
}

exports.getMoodMeals = async (req, res) => {

    try{
        
        const {selectedmood} = req.params;
        console.log(" sm :" ,selectedmood)
        
        const foundmoodmeals = await mood.findOne({moodname :selectedmood}).populate("meals");

        // const moodmeals = await mood.find();
        console.log(foundmoodmeals);
        return res.json({
            foundmoodmeals
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error while fetching meals based on mood"
        })
    }
}