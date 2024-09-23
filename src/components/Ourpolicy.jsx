import React from "react";
import "./Shopping.css";

export const Ourpolicy = () => {
  return (
    <>
      <div className="policy-items">
        <div className="left">
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <h2>Easy Exchange Policy</h2>
          <p>We offer easy exchange policy</p>
        </div>
        <div className="left">
          <i className="fa-solid fa-rotate-left"></i>
          <h2>7 Days Return Policy</h2>
          <p>We Provide 7 days free reutrn policy</p>
        </div>
        <div className="left">
          <i className="fa-solid fa-square-phone-flip"></i>
          <h2>Best customer support</h2>
          <p>We Provide 24/7 customer supo=port</p>
        </div>
      </div>

      <div className="subscribe">
        <h1>Subscribe now & get 20% off</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, itaque!
        </p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" placeholder="Search" />
          <button className="btn btn-outline-danger" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};
