import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handlelogin = (e) =>{
    navigate("/login")
  }
  const gohome = (e) =>{
    navigate("/")
  }
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Handle form submit and save user data
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate('/login'); // Navigate to login after signup
  };

  return (
    <div className='bg-img'>
      <nav className='login-home'>
      <button>
      <img src="/images/nike-white-logo.png" alt="logo" className='logo' onClick={gohome}/>
      </button>
      </nav>
    <div className='full-img'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className='input-box'>
            <input 
              name="username"
              value={input.username}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="text" 
              placeholder="UserName" 
              required 
            />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input 
              name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="text" 
              placeholder="Email" 
              required 
            />
            <MdEmail className='icon' />
          </div>

          <div className='input-box'>
            <input 
              name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              type="password" 
              placeholder="Password" 
              required 
            />
            <FaLock className='icon' />
          </div>

          <div className='loginbtn'>
            <button type="submit" onClick={handlelogin} className='dark'>Login</button>
            <button type="submit" >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
