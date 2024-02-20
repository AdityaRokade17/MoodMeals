import React, { useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

const Eatsgpt = () => {

    const [userPromt , setuserPromt] = useState({
        userpromt : ""
    });

    const [language , setLanguage] = useState("english");
    const [recipeData , setRecipeData] = useState("Search Recipe...");
    


    const { userpromt} = userPromt;

    const handleChange = (e) => {

        const{name ,value} = e.target;
        setuserPromt(prevpromt => ({
            ...prevpromt,
            [name] : value
        })) 
        console.log(userPromt);

    };

    const clickHandler = async (e) => {
        e.preventDefault();

        try{
            // console.log(userPromt);
            // console.log(language);
            // setLanguage("marathi");
            // console.log(language); 
            //setFinalPromt(userPromt.userpromt + " Recipes in " + language);
            // console.log( "finalpromt: " , finalpromt);

           const recipe = await axios.post(`${process.env.REACT_APP_API_URL}/getresponse`, {userpromt , language});
           console.log("recipe :::::" ,recipe.data )
           setRecipeData(recipe.data);
        }catch(error){
            console.log(error)
        }
    }

    const dropdownHandler = (event) =>{
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    }


  return (
    
        <div className='flex justify-center items-center gap-2'>
            <div className='bg-neutral-900 flex flex-col gap-2 p-5 rounded-xl min-h-[30rem] w-full sm:w-[35rem] text-sm'>
                <h1 className='ml-2 text-white'>Just say/ask any recipe :</h1>
                <div className='flex gap-1 h-[1rem] sm:h-full'>
                    <input className='focus:outline-stone-300  w-11/12  rounded-2xl p-1 searchinput' 
                           placeholder='Enter Something..'
                           name="userpromt"
                           value={userpromt}
                           onChange={handleChange}
                           ></input>
                    <button onClick={clickHandler} className=''><FaArrowCircleRight className='text-white sm:text-2xl' /></button>
                </div>

                <div className='p-2'>
                    <div className='items-center'>
                        <h1 className=' text-white'>Chef :</h1>
                        <div className='bg-neutral-900 rounded-md text-white'>
                            <label htmlFor='language'>Select Language : </label>
                            <select name='language'
                                    id='language'
                                    value={language}
                                    onChange={dropdownHandler}
                                    className='text-black p-1 rounded-md'
                            >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="marathi">Marathi</option>
                                <option value="gujarati">Gujarati</option>
                            </select>
                        </div>
                    </div>

                    <div className='bg-neutral-400 p-2 mt-2 rounded-lg'>
                        <p>{recipeData}</p>
                        {/* <p>data is here...</p> */}
                    </div>
                    <p className='text-red-600 m-2'>We apologize, but our response is limited due to the token limitation for the ChatGPT API's free version.</p>

                </div>
                
            </div>
            
        </div>
  )
}

export default Eatsgpt