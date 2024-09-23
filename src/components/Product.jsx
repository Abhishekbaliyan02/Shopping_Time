import React, { useContext } from "react";
import "./Shopping.css";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

export const Product = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/Productitem/${id}`} className="show-product">
      <div>
        <div className="card">
          <img src={image} className="card-img-top" alt="No Image Found" />
          <p className="card-text">{name}</p>
          <div className="card-body">
            Price:{currency}
            {price}
          </div>
        </div>
      </div>
    </Link>
  );
};
