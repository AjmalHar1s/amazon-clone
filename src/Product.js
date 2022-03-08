import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-info">
        <p>The Lean StartUp</p>
        <p className="product-price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product-rating">
            <p>S</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
