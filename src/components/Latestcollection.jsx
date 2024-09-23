import React, { useContext, useEffect, useState } from "react";
import "./Shopping.css";
import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";
import { Product } from "./Product";

export const Latestcollection = () => {
  const { Products } = useContext(ShopContext);
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    setLatestproduct(products.slice(3, 11));
  }, []);

  // console.log(latestproduct)

  return (
    <div className="latest-collection">
      <div className="header">
        <h1>Latest Collections</h1>
        <hr className="heading-line" />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          ut.
        </p>
      </div>
      <div className="products">
        {latestproduct.map((item, index) => {
          return (
            <Product
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
