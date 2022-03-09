import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3740_.jpg"
        />

        <div className="home-row">
          <Product
            id="1221"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="1222"
            title="Baybee Alpha Scooter for Kids, 3 Wheel Kids Scooter Smart Kick Scooter with Foldable & Height Adjustable Handle & Extra-Wide LED PU Wheels & Brake, Skate Scooter for Kids (F3-Black)"
            price={99.99}
            image="https://m.media-amazon.com/images/I/61kZDB7JpeL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id="1223"
            title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage), Fingerprint Sensor"
            price={239.99}
            image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1224"
            title="Alpino Natural Peanut Butter Crunch 1 KG | Unsweetened | 30 G Protein | 100% Roasted Peanuts | No Added Sugar, Salt or Hydrogenated Oils | High Protein Peanut Butter Crunchy | Gluten-Free | Vegan"
            price={39.99}
            image="https://m.media-amazon.com/images/I/81F02eepKpL._SY741_.jpg"
            rating={3}
          />
          <Product
            id="1225"
            title="boAt Rockerz Bluetooth Wireless Over Ear Headphones with Mic (Raging Red)"
            price={9.99}
            image="https://m.media-amazon.com/images/I/61x8gxTCOaL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home-row">
        <Product
            id="1226"
            title="PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61QsG3AkxaL._SL1181_.jpg"
            rating={4}
          />

        </div>
      </div>
    </div>
  );
};

export default Home;
