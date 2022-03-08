import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3740_.jpg" />

        <div className="home-row">
            <Product />
        </div>
      
      </div>
    </div>
  );
};

export default Home;
