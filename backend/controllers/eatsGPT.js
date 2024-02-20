const OpenAI = require("openai");
require('dotenv').config();

const apiKey = process.env.apikey;

const openai = new OpenAI( {
    apiKey : apiKey
})

exports.eatsResponse = async ( req , res) => {

    try{
         //console.log("reqbody :" , req.body)
        const {  userpromt, language } = req.body;
        console.log("userpromt: ", userpromt , language)

        // const language = "marathi"
        const promt = userpromt + " recipe steps in " + language;
        console.log(promt);

        const response = await openai.chat.completions.create({
            model : 'gpt-3.5-turbo',
            messages : [{"role" : "user" , "content" : promt}],
            max_tokens : 100
        })
        console.log(response.choices[0].message.content);
        res.send(response.choices[0].message.content)
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
    
    // const language = "Marathi"
    // const userPromt = `${Promt} + recipe + in + ${language}`
    
}