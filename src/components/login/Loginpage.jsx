import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const gohome= (e) =>{
    navigate("/")
  }
  const goTOsignup = (e) =>{
    navigate("/signup");
  }

  const [input, setInput] = useState({
      email: "",
      password: ""
    });

    const handleLogin = (e) =>{
      e.preventDefault();
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if(input.email === loggeduser.email && input.password === loggeduser.password){
        localStorage.setItem("loggedin" , true);
        navigate("/");
      }
      else{
        alert("Wrong Email or Password");
      }
    };
  return (
    <div className='bg-img'>

      <nav className='login-home'><button>
      <img src="/images/nike-white-logo.png" alt="logo" className='logo' onClick={gohome}/>
      </button>
      </nav>
      <div className='full-img'>
      <div className='wrapper'>
        <form onSubmit={handleLogin}>

         <h1>Log in</h1>

          <div className='input-box'>
            <input 
            name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="email" placeholder='Email' required />
            <MdEmail className='icon' />
          </div>

          <div className='input-box'>
            <input 
            name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className='loginbtn'>
            <button type='submit' onClick={goTOsignup} className='dark' >
              Sign up
            </button>
            <button type='submit'>
              LogIn
            </button>

          </div>

        </form>

      </div>

    </div>

    </div>

  );
};

export default LoginPage;
