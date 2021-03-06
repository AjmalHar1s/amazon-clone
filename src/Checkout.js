import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg"
          alt="checkout banner"
        />
        <div className="checkout-title">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
