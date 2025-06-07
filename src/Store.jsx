import React, { useState } from 'react';
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Products from "./Products/Products";
import Navigation from "./Navigation/Nav";
import products from "./db/data"; // ✅ import your data

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          if (selected.includes("-")) {
            const [min, max] = selected.split("-").map(Number);
            return newPrice >= min && newPrice <= max;
          }

          return (
            category === selected ||
            color === selected ||
            company === selected ||
            title.toLowerCase().includes(selected.toLowerCase())
          );
        }
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={title + newPrice}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default Store;
