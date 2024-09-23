import React from "react";
import homeimage from "./images/logo.png";
import "./Shopping.css";

export const Footer = () => {
  return (
    <div className="all-footer">
      <div className="footer">
        <div className="left-footer">
          <img src={homeimage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam
            odio architecto magni ut nemo ullam provident suscipit aliquam eos
            atque, vitae recusandae maxime nam distinctio obcaecati debitis
            exercitationem! Est suscipit laudantium similique facere?
          </p>
        </div>
        <div className="middle">
          <h1>COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="right">
          <h1>GET IN TOUCH</h1>
          <ul>
            <li>+91 546505456</li>
            <li>Shoppingtime@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2024@shopping time - All Right Reserved</p>
      </div>
    </div>
  );
};
