import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import "./Shopping.css";

export const Orders = () => {
  let { products, cartItems, currency } = useContext(ShopContext);

  let [cartData, setCartdata] = useState([]);

  useEffect(() => {
    let tempdata = [];

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartdata(tempdata);
  }, [cartItems]);

  return (
    <div className="order">
      <div className="cart">
        <h1>My Orders-</h1>

        {cartData.map((item, index) => {
          let productdata = products.find((product) => product._id == item._id);
          return (
            <>
              <div className="cartitems">
                <img src={productdata.image[0]} alt="" />
                <div className="title">{productdata.name}</div>
                <div className="price">
                  {currency}
                  {productdata.price}
                </div>
                <div className="size">{item.size}</div>
                <p>Ready to ship</p>

                <div className="delete">
                  <button>Track Order</button>
                  <p>Date:25,july,2024</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
