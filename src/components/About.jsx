import React from "react";
import { assets } from "../assets/assets";
import './Shopping.css';

export const About = () => {
  return (
    <div className="aboutpage">
      <h2>ABOUT US-</h2>
      <img src={assets.about_img} alt="" />
      <div className="para">
        <p>
          Welcome to <strong>Shopping-Time</strong>, your ultimate online
          destination for all things fashion, beauty, and lifestyle! Founded
          with a passion for style and a commitment to quality, we strive to
          bring you the latest trends and timeless pieces that elevate your
          wardrobe and daily life.
        </p>
        <p>
          At <strong>Shopping-Time</strong>, we believe shopping should be an
          experience, not just a transaction. Our carefully curated collection
          features a wide range of products, from chic apparel and accessories
          to home essentials, all designed to add elegance, comfort, and joy to
          your everyday routine. We source from top brands and independent
          designers alike, ensuring a unique mix of items that cater to diverse
          tastes and needs.
        </p>
        <p>
          We’re more than just an online store – we’re a community of style
          enthusiasts who believe in self-expression through fashion. Our
          mission is to empower you to look and feel your best, with
          high-quality products at affordable prices. Whether you’re shopping
          for the perfect outfit, the latest beauty essentials, or home décor
          that speaks to your personality, <strong>Shopping-Time</strong> has
          something special for everyone.
        </p>

        <p>
          Feel free to replace <strong>Shopping-Time</strong> with the actual
          name of your shopping website and adjust it based on your brand values
          or target audience!
        </p>
      </div>

      <div className="about-item">
        <div className="policy">
          <h2>Quality Assurance:</h2>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="policy">
          <h2>Convenience:</h2>
          <p>
            With our user-friendly interface and hassiefree ordering process
            shopping has never been easier.
          </p>
        </div>
        <div className="policy">
          <h2>Exceptional Customer Service:</h2>
          <p>
            Our team of dedicated professionals is here to assist you the
            way,ensuring your satisfaction is our top priority.
          </p>
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
    </div>
  );
};
