import React, { useState } from 'react'
import Header from "../components/header"
import Emoji from '../components/Emoji'
import Suggestion from '../components/Suggestion'
import Footer from "../components/Footer";
const Profile = () => {

  const [selectedmooddata , setSelectedMoodData] = useState("Happy");

  return (
    <div className='h-[100vh]'>
      
      <div className='bg-black'>
        <Header/>

        <div className='text-white'>
          <div className='flex justify-center m-[2rem]'>
            <h1>Select <span className='text-red-600' >Mood</span>, <span className='text-blue-500'>Budget</span> & <span className='text-green-600'>Location</span></h1>
          </div>
          <div className='flex flex-col gap-[2rem] m-[2rem] items-center'>
            <Emoji setSelectedMoodData={setSelectedMoodData}/>

            {/* Suggestion Container */}
            <div className=' w-10/12 h-11/12'>
              <Suggestion selectedmooddata={selectedmooddata}/>
            </div>

            {/* comming soon */}
            <div className='border h-[10rem] w-full flex flex-col justify-center items-center'>
              <h1>Trending meals near your location</h1>
              <h1 className='text-red-600'>Comming Soon..</h1>
            </div>

          </div>
        </div>

        <Footer/>
      </div> 
      
    </div>
  )
}

export default Profile