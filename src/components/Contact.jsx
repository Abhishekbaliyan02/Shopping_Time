import React from "react";
import { assets } from "../assets/assets";
import "./Shopping.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <h2>CONTACT-</h2>
      <img src={assets.contact_img} alt="" />
      <div className="contact-information">
        <h3>Our Store</h3>
        <p>56924 Nehru Station</p>
        <p>Suite 350,NewYork,America</p>
        <br />
        <p>Tel:01234 245698</p>
        <p>Email:admin@shoppingtime.com</p>
        <br />
        <h2>Careers at Shopping Time</h2>

        <p>Learn more about our teams and job openings.</p>
        <br />
        <button>Explore Jobs</button>
      </div>
    </div>
  );
};
