import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Product } from "./Product";

export const TopRated = () => {
  const { products } = useContext(ShopContext);
  const [toprated, setToprated] = useState([]);

  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestseller);
    setToprated(bestproduct.slice(2, 7));
  }, []);

  return (
    <div className="top-rated">
      <div className="header">
        <h1>Top Rated Products</h1>
        <hr className="heading-line" />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          ut.
        </p>
      </div>
      <div className="products">
        {toprated.map((item, index) => {
          return (
            <Product
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};
