import React, { useContext } from "react";
import "./Shopping.css";
import { ShopContext } from "./ShopContext";

export const CartTotal = () => {
  let { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div>
      <div className="cart-total">
        <h4>CART TOTALS</h4>
        <div className="subtotal">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <div className="shipping">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="total">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() == 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};
