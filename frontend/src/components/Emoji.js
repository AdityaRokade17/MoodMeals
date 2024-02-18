import React, { useState } from 'react'
import happyEmoji from "../Assets/happ.gif"
import spicy from "../Assets/spiacy.gif"
import relax from "../Assets/relax.gif"
import energy from "../Assets/energy.gif"
import cold from "../Assets/cold.gif"
import yummy from "../Assets/lottie.gif"
import axios from 'axios'
const Emoji = ({setSelectedMoodData }) => {
    const [active , setActive] = useState();

    const moodHandler = async (selectedmood) =>{
        // setSelectedMood(selectedMood);
        // setMood(() => selectedMood);
        // console.log("Selected mood:", selectedMood);

        try{
            console.log("emoji me selected mood" , selectedmood);
            const res = await axios.get(`http://localhost:4000/api/v1/moodmeals/getmoodmeals/${selectedmood}`)
            console.log(res.data);
            setSelectedMoodData(res.data)
            setActive(selectedmood);
        }catch(error){
            console.log(error)
        }
    } 

  return (
    <div className='flex flex-wrap gap-6 justify-center rounded-2xl min-w-6/12  m-2 p-2 bg-neutral-900'>
              
        <button onClick={ () => moodHandler("Happy")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Happy" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={happyEmoji} alt='' className='h-[5rem]'/>
            <h1>Happy</h1>
        </button>
        <div onClick={ () => moodHandler("Spicy")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Spicy" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={spicy} alt='' className='h-[5rem]'/>
            <h1>Spicy</h1>
        </div>
        <div onClick={ () => moodHandler("Relax")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Relax" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={relax} alt=''  className='h-[5rem]'/>
            <h1>Relaxed</h1>
        </div>
        <div onClick={ () => moodHandler("Energy")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Energy" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={energy} alt='' className='h-[5rem]'/>
            <h1>Energetic</h1>
        </div>
        <div onClick={ () => moodHandler("Cold")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Cold" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={cold} alt='' className='h-[5rem]'/>
            <h1>Cold</h1>
        </div>
        <div onClick={ (e) => moodHandler("Yummy")} className={`h-full  bg-neutral-800 rounded-lg flex flex-col items-center p-2 cursor-pointer
                         ${active === "Yummy" ? "transform transition duration-500 scale-110 bg-neutral-900 " : "transition duration-500"}`}>
            <img src={yummy} alt='' className='h-[5rem]'/>
            <h1>Yummy</h1>
        </div>
  </div>

  )
}

export default Emoji