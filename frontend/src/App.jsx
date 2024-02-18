import "./App.css";
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Home from "../src/pages/Home";
import Gptpage from "./pages/Gptpage";
import About from "./components/About";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = (success) => {
    console.log("app me success", success);
    setIsLoggedIn(success);
    if (!success) {
      navigate('/profile');
    }
  };

  return (
    <div className="">
      <Routes>
        {/* <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/eatsgpt" element={<Gptpage />} />
        {isLoggedIn ? (
          <Route path="/home" element={<Home onLoginSuccess={handleLoginSuccess} />} />
        ) : (
          <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        )} */}

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/eatsgpt" element={<Gptpage/>}/>
        <Route path="/about" element={<About/>}/>
        {isLoggedIn ? (
          <Route path="/profile" element={<Profile onLoginSuccess={handleLoginSuccess}/>}/> 
        ) : (
          <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />}/>
        )}
        

        
      </Routes>
    </div>
  );
}

export default App;
