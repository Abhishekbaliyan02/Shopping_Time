import React, { useContext, useState } from "react";
import "./Shopping.css";
import { CartTotal } from "./CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

export const PlaceOrder = () => {
  let [method, setMethod] = useState("cod");

  let { navigate } = useContext(ShopContext);

  return (
    <div className="placeorder">
      <div className="leftside">
        <h3>DELIVERY INFORMATION</h3>
        <div className="information">
          <div class="mb-3 info">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="First Name"
            />
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Last Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control email"
              id="exampleInputPassword1"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control street"
              id="exampleInputPassword1"
              placeholder="Street"
            />
          </div>
          <div class="mb-3 info">
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="City"
            />
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="State"
            />
          </div>
          <div class="mb-3 info">
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Zipcode"
            />
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Country"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control phone"
              id="exampleInputPassword1"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      <div className="rightside">
        <CartTotal />
        <div className="payment">
          <button onClick={() => setMethod("stripe")}>
            <img
              src={assets.stripe_logo}
              alt=""
              className={method == "stripe" ? "selected" : ""}
            />
          </button>
          <button onClick={() => setMethod("razor")}>
            <img
              src={assets.razorpay_logo}
              alt=""
              className={method == "razor" ? "selected" : ""}
            />
          </button>
          <button onClick={() => setMethod("cod")}>
            <b className={method == "cod" ? "selected" : ""}>
              CASH ON DELIVERY
            </b>
          </button>
        </div>
        <Link to="/Orders">
          <button className="placeorderbtn">PlaceOrder</button>
        </Link>
      </div>
    </div>
  );
};
