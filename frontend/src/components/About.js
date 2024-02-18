import React from 'react'
import aboutImage from "../Assets/abou.jpeg"
const About = () => {
  return (
    <div id='about' className='bg-neutral-900 flex gap-10 items-center justify-center p-10'>
      <div className='w-[30rem] text-white flex flex-col gap-8'>
        <h1 className='font-extrabold text-6xl text-white '><span className='text-red-600'>About</span> Us</h1>
        <p>Welcome to <span className='text-red-600'>Mood</span><span className='text-blue-400'>Meals</span> ! We're passionate about helping you navigate the world of food with ease and confidence. At MoodMeals, we understand that <span className='text-blue-500'>deciding what to eat can sometimes feel overwhelming</span>. That's why we're here to simplify the process for you.</p>

        <p>Our mission is simple : to provide personalized food recommendations tailored to your unique preferences, <span className='text-red-600'>mood</span>, <span className='text-green-600'>location</span>, and <span className='text-blue-500'>budget</span>. Whether you're craving comfort food on a rainy day, searching for a quick bite near your office, or looking to explore new culinary adventures without breaking the bank, we've got you covered.</p>
      </div>
      <div className='border border-white text-white'>
            <img  className='h-[20rem] w-[20rem]' src={aboutImage}/>
      </div>
    </div>
  )
}

export default About