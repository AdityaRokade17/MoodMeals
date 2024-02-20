import React from 'react';
import AdityaRLinkedinImage from '../Assets/AdityaRLinkedin.jpg'; // Import the image

const Team = () => {
  return (
    <div id='team' className='bg-black flex flex-col gap-10 items-center justify-center p-5 '>
      <div className='w-full text-white flex flex-col gap-8 items-center'>
        <h1 className='font-extrabold sm:text-6xl text-3xl text-white '><span className='text-red-600'>Who we are</span></h1>
        <p className='text-[8px] sm:text-[16px] sm: w-11/12'>At <span className='text-red-600'>Mood</span><span className='text-blue-400'>Meals</span>, we're on a mission to simplify dining choices for everyone. Founded by me, <span className='text-blue-600'>Aditya Rokade</span>, our platform offers personalized meals recommendations based on mood, location, and budget. Now, as we continue to grow, we're excited to welcome passionate individuals who share our vision to join our team. If you're eager to contribute your enthusiasm and expertise to revolutionizing how we approach meals choices, we'd love to have you on board.</p>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <div className='border border-white text-white h-[14rem] w-[12rem]'>
          {/* Use the imported image */}
          <img  className='h-full w-full bg-cover' src={AdityaRLinkedinImage} alt='Aditya Rokade'/>
        </div>
        <h1 className='text-white'>Aditya Rokade</h1>
      </div>
    </div>
  );
};

export default Team;
