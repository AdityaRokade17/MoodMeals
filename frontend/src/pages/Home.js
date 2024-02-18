import React from 'react'
import Header from '../components/header'
import Main from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Team from "../components/Team"
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      
      <div className='bg-black h-full'>
        <Header/>

        <div className=''> 
          <Main/>
        </div>

        <div>
          <About/>
        </div>

        
        <div>
          <Team/>
        </div>
      
        <div>
          <Contact/>
        </div>

        
        <div>
          <Footer/>
        </div>

        
      </div>
    </div>
  )
}

export default Home