import React from "react";
import "./Shopping.css";
import { assets } from "../assets/assets";

export const Firstpage = () => {
  return (
    <div className="container">
      <div className="left-container">
        <hr />
        <p>OUR BESTSELLERS</p>
        <h1>Latest Arrivals</h1>
        <p>SHOP NOW</p>
        <hr />
      </div>
      <div className="right-container">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};
