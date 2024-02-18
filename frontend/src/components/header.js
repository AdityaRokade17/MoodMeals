import React from 'react'
import {Link ,useLocation} from "react-router-dom"


const Header = () => {
  const location = useLocation();
  return (
    <div className='w-[1/2]'>
      <div className='text-white flex justify-around p-2'>
        <div className='gap-5'>
          <h1 className='text-xl '> <span className='text-red-600'>Mood</span><span className='text-blue-400'>Meals</span> </h1>
        </div>
        <div className='flex gap-5'>
          
          <div><Link to={"/eatsgpt"} className='decoration underline underline-offset-8 decoration-blue-500' >Eat's Gpt</Link></div>

          <div>
          {
            location.pathname === '/eatsgpt' ? (
              <Link to={"/"} className=''>Home</Link>
            ) : location.pathname === '/profile' ? (
              <Link to={"/"} className=''>Home</Link>
            ) :(
              <Link to={"/profile"} >Profile</Link>)
          }
          </div> 
          
          
        </div>
      </div>
    </div>
  )
}

export default Header