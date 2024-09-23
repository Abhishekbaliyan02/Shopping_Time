import React, { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import { ShopContext } from "./ShopContext";
import "./Shopping.css";

export const Relatedproduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  let [related, setRelated] = useState([]);

  const relatedproduct = () => {
    if (products.length > 0) {
      let productcopy = products.slice();

      productcopy = productcopy.filter((item) => category == item.category);
      productcopy = productcopy.filter(
        (item) => subCategory == item.subCategory
      );

      setRelated(productcopy.slice(0, 4));
    }
  };

  useEffect(() => {
    relatedproduct();
  }, [products]);

  return (
    <div className="products">
      {related.map((item, index) => {
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
  );
};
