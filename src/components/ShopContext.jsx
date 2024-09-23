import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  let currency = "$";
  let delivery_fee = 10;
  let [searchitem, setSearchitem] = useState("");
  let [cartItems, setCartitems] = useState({});
  let navigate = useNavigate();

  let addTocart = (itemId, size) => {
    if (!size) {
      toast.error("Select the size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartitems(cartData);

    if (size) {
      toast.success("Item Added To Cart");
      return;
    }
  };

  let cartCount = () => {
    let total = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          total += cartItems[items][item];
        }
      }
    }
    return total;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartitems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (let items in cartItems) {
      let itemInfo = products.find((product) => product._id == items);
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    searchitem,
    setSearchitem,
    addTocart,
    cartCount,
    cartItems,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
