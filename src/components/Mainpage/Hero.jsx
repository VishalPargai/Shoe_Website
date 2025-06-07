import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom';
const navigate = navigator


const hero = () => {

    const navigate = useNavigate();
    
      const handlestore = (e) =>{
        navigate("/store")
      }
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className='hero-btn'>
            <button className='redbttn' onClick={handlestore}>Shop Now</button>
            <button className='sec-btn'>Category</button>
        </div>

        <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-logo'>
                <a href="https://www.amazon.in/s?k=nike+shoes"><img src="/images/amazon.png" alt="amazon-logo" /></a>
                <a href="https://www.flipkart.com/search?q=nike%20shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img src="/images/flipkart.png" alt="flipkart-logo" /></a>
            </div>
        </div>

        </div>
        <div className='hero-image'>
            <img src="/images/shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default hero
