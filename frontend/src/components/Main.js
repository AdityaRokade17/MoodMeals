import React from 'react'

const Main = () => {
  return (
    <div id='home' className=' text-white flex flex-col justify-center items-center w-full h-[20rem] md:h-[100vh]'>
        <div className='flex flex-col gap-5 m-3'>
            <h1 className='md:text-8xl text-4xl font-extrabold'>What to eat <span className='text-red-600'>?</span> </h1>
            <div className='flex flex-col'>
                <p className='text-blue-400 text-sm md:text-xl'><span className='text-red-600 font-extrabold'>Confused ?</span> Don't worry, we're here to suggest </p>
                <p className='ttext-sm md:text-xl'>meals based on your <span className='decoration underline underline-offset-8 decoration-red-600'>mood</span>, <span className='decoration underline underline-offset-8 decoration-green-600'>location</span>, and <span className='decoration underline underline-offset-8 decoration-blue-500'>budget</span>.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Main