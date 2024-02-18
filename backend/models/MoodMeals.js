const mongoose = require("mongoose")

const moodSchema = mongoose.Schema({

    moodname : {
        type :String,
    },
    meals : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "meal"
        }
    ]

}) 



const mealSchema =  mongoose.Schema({

    mealname : {
        type :String,
    },
    mealinfo : {
        type : String,
    },
    mealprice : {
        type : Number
    },
    moodid :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "mood"
    },
    imageurl : {
        type : String
    },
    restos :[ 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "resto"
        }
    ]

})



const restoSchema = mongoose.Schema({

    restoname : {
        type : String
    },
    location : {
        type : String,
    },
    rating : {
        type : Number
    },
    meals : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "meal"
        }
    ]
})


const mood = mongoose.model('mood' , moodSchema);
const meal = mongoose.model('meal' , mealSchema);
const resto = mongoose.model('resto' , restoSchema);

module.exports = {mood, meal , resto};