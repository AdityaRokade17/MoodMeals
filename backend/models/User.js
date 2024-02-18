const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({

    fullname: {
        type : String,
        required : true,
        trim : true
    },
    username: {
        type : String,
        required : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        trim : true
    },
    password: {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("user" , userScehma);