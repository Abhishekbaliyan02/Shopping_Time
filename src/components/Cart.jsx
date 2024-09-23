import React, { useContext, useEffect, useState } from "react";
import "./Shopping.css";
import { ShopContext } from "./ShopContext";
import { CartTotal } from "./CartTotal";

export const Cart = () => {
  let { products, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

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
    <div className="cart-page">
      <div className="cart">
        <h1>Your Cart-</h1>

        {cartData.map((item, index) => {
          let productdata = products.find((product) => product._id == item._id);
          return (
            <>
              <div className="cartitems">
                <img src={productdata.image[0]} alt="" />
                <div className="title">{productdata.name}</div>
                <div className="price">{productdata.price}</div>
                <div className="size">{item.size}</div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="quantity"
                  onChange={(e) =>
                    e.target.value == " " || e.target.value == "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
                {/* <div className="quantity">{}</div> */}
                <div className="delete">
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  ></i>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="carttotal">
        <CartTotal />
        <button onClick={() => navigate("/Placeorder")}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
