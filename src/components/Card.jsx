import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Card.css";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex(item => item.title === title);

    if (existingItemIndex !== -1) {
      // Increase quantity if item already exists
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      cart.push({
        id: Date.now(),
        img,
        title,
        prevPrice,
        newPrice,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${title} added to cart 🛒`, {
      position: "bottom-right",
    });
  };

  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          {star}{star}{star}{star}
          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del className="prev-price">₹{prevPrice}</del>
            <span className="new-price">₹{newPrice}</span>
          </div>
          <button className="bag-btn" onClick={handleAddToCart}>
            <FaShoppingCart className="bag-icon" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Card;
