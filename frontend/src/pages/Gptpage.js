import React from 'react'
import Eatsgpt from "../components/Eatsgpt";
import Header from '../components/header';
const Gptpage = () => {
  return (
    <div className='h-[100vh]'>
        <div className='bg-black h-full'>
            <Header/>
            <div className='m-[3rem] flex flex-col items-center gap-4'>
                <Eatsgpt/>
                <h1 className='text-white'>This is the response from ChatGPT using the OpenAI API</h1>
            </div>
           
        </div>
    </div>
  )
}

export default Gptpage