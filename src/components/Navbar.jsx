import React, { useContext, useEffect, useState } from "react";
import logo from "./images/logo.png";
import "./Shopping.css";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { Product } from "./Product";
import { assets } from "../assets/assets";

export const Navbar = () => {
  let { searchitem, setSearchitem, cartCount } = useContext(ShopContext);

  let [show, setShow] = useState(false);
  let [search, setSearch] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="left-bar">
          <img className="shopping-logo" src={logo} alt="No Image" />
        </div>
        <div className="middle-bar">
          <ul>
            <li>
              <Link to="/" className="bar">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Collection" className="bar">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/About" className="bar">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="bar">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-bar">
          <span>
            <div class="input-group mb-3">
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="Search.."
                value={searchitem}
                onChange={(e) => {
                  setSearchitem(e.target.value);
                }}
              />
              <button
                class="btn btn-outline-danger"
                type="button"
                id="button-addon2"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <span className="search-bar">
              <i
                class="fa-solid fa-magnifying-glass"
                onClick={() => setSearch(!search)}
              ></i>
            </span>
          </span>
          <span>
            <Link to="/Login" className="bar">
              <i className="fa-solid fa-user"></i>
            </Link>
          </span>
          <span>
            <Link to="/Cart" className="bar">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="cart-items">{cartCount()}</div>
            </Link>
          </span>

          <div className="toggle-btn">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setShow(true);
              }}
            ></i>

            {show === true ? (
              <div className="navbar-btn">
                <ul>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => {
                      setShow(false);
                    }}
                  ></i>
                  <li className="home">
                    {" "}
                    <Link
                      to="/"
                      className="bar"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Collection"
                      className="bar"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      {" "}
                      Collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      className="bar"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      {" "}
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Contact"
                      className="bar"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {search == true ? (
        <div className="search-bar">
          <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="Search.."
                value={searchitem}
                onChange={(e) => {
                  setSearchitem(e.target.value);
                }}
              />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
