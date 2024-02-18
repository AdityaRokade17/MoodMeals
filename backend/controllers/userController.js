const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async ( req, res) => {

    try{

        const {fullname, username, email , password} = req.body;

        const existingUser = await User.findOne({username});

        if(existingUser){

            return res.status(400).json({
                success : false,
                message : "user already exist"
        
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password , 10);
        }catch(error){
            return res.status(500).json({
                success : false,
                message : "error in hashing password"
            })
        }

        //create entry for user
        const user = await User.create({
            fullname,username,email,password:hashedPassword
        })

        return res.status(200).json({
            success : true,
            message : "user created Successfully"
        })
         
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
        });
    }
}

exports.login = async ( req, res) => {

    try{
        const { username , password} = req.body;

        if(!username || !password) {
            return res.status(400).json({
                success : false,
                message : "please fill all the details carefully"
            });
        }

        let user = await User.findOne({username});

        if(!user){
            return res.status(401).json({
                success : false,
                message : "user is not registered"
            })
        }

        const payload = {

            username : user.username,
            id : user._id,

        };

        //verify password and generate jwt token

        if(await bcrypt.compare(password, user.password)){

            //password match
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })

            user = user.toObject();
            user.token = token;
            // user.password = undefined

            const options = {
                expires: new Date( Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }

            res.cookie("token", token, options).status(200).json({
                success:true,
                
                message:'User Logged in successfully',
            });
        }
        else {
            //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}