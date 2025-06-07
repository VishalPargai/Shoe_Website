import React, { useState, useEffect } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { toast } from "react-toastify";


const Nav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
    toast("YOU HAVE BEEN LOGGED OUT");
  };

  const handleSignupLogin = () => {
    navigate('/signup');
  };

  const handleCart = () => {
    navigate('/cart');
  };



  return (
    <div className='Fullnav'>
      <header className='navhead'>
        <img src="/images/brand_logo.png" alt="logo" className='logo' />
        <nav>
          <ul className='nav_links'>
            <li><a href="#">MENU</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>

        <div className='two-btns'>
          {user ? (
            <div className='twobtn'>
              <button className='logoutbtn cart' onClick={handleCart}>
                <FaShoppingCart />
              </button>
              <span className="username-display">
                <FaUser className='icon' /> {user.username}
              </span>
              <button onClick={handleLogout}className='logoutbtnw'>Logout</button>
            </div>
          ) : (
            <div className='two-btns'>
              <button onClick={handleSignupLogin} className='redbtn'>Sign Up / Login</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Nav;
