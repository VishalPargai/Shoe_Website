import React, { useState, useEffect } from 'react';
import './Cart.css';
import { FaTrash ,FaStore } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);

  const gostore = (e) =>{
    navigate("/store")
  }
  return (
    <div className="cart-container">
      <header className="cart-header">
        <div>
        <img
          src="/images/brand_logo.png"
          alt="Logo"
          className="cart-logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', height: '50px' }}
        />
        {user && (
          <p className="cart-username">
            Welcome, <strong>{user.username}</strong>
          </p>
        )}

        </div>
        <div>
        <FaStore className='store-icon' onClick={gostore}/>
        </div>
      </header>

      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.newPrice}</p>

                  {/* 👇 Quantity Control */}
                  <label>
                    Quantity:
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-select"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{totalPrice.toLocaleString('en-IN')}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;