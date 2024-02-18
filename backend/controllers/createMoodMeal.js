const {mood , meal , resto } = require("../models/MoodMeals");

exports.createResto = async (req, res) => {

    try{
        
        const {restoname , location , rating , meals } = req.body;

        const existingResto = await resto.findOne({restoname});

        if(existingResto){
            return res.json({
                success : false,
                message : "Resto alreadt exits" 
            });
        }

        //create
        const newResto = await resto.create({
            restoname , location , rating , meals
        }) 

        return res.json({
            success : true,
            message : "Resto Registed Succesfully"
        })

    }catch(error){
        console.log("error while creating resto");
        console.error(error)
        return res.status(500).json({
            success:false,
            message:'Resto cannot be registered, please try again later',
        });
    }

}

exports.createmeal =async (req, res) => {

    try{
        const { mealname , mealinfo , mealprice, moodid , restos , imageurl} = req.body;

        //create
        const newMeal = await meal.create({
            mealname , mealinfo , mealprice, moodid , restos ,imageurl
        })

        //mood ke meals array me meal id add kro
        const updatedMood = await mood.findByIdAndUpdate(moodid, {$push :{meals : newMeal._id }})

        //update resto collection
        const updatedResto = await resto.findByIdAndUpdate(restos , {$push : {meals : newMeal._id}})
        return res.json({
            success : true,
            message : "meal Registed Succesfully meal id added to restos"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'meal cannot be registered, please try again later',
        });
    }
    
}
exports.createmood = async (req, res) => {
    try{
        const {moodname} = req.body;
        
        //create
        const newMood = await mood.create({
            moodname
        })

        return res.json({
            success : true,
            message : "mood Registed Succesfully meal id added to meal"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'mood cannot be registered, please try again later',
        });
    }
}