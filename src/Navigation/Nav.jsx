import { useNavigate } from 'react-router-dom';
import { FaHeart , FaShoppingCart } from "react-icons/fa";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {

       const navigate = useNavigate();
    const gohome = (e) =>{
    navigate("/")
  }

  const handlecart = () => {
    navigate('/cart');
  };

  return (
    <div className='storepage-navbar'>
    <>
      <div>
            <img src="/images/brand_logo.png" alt="logo" className='logo' onClick={gohome}/>
        </div>

        <div className='search-bar'>
            <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
            <div className='search-icons'>
            <FaHeart className='icons'/>
            <FaShoppingCart className='icons' onClick={handlecart}/>
            </div>
        </div>

    </>
    </div>
  );
};

export default Nav;
