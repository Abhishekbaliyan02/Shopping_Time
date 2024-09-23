import React, { useContext, useEffect, useState } from "react";
import "./Shopping.css";
import { ShopContext } from "./ShopContext";
import { Product } from "./Product";

export const Collection = () => {
  const { products } = useContext(ShopContext);
  let { searchitem, setSearchitem } = useContext(ShopContext);

  let [filter, setFilter] = useState(false);
  let [allproduct, setAllproduct] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubcategory] = useState([]);

  const categorybtn = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const subcategorybtn = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = (e) => {
    let productscopy = products.slice();

    if (searchitem) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(searchitem.toLowerCase())
      );
      // console.log(searchitem.toLowerCase())
    }

    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productscopy = productscopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setAllproduct(productscopy);
  };

  useEffect(() => {
    setAllproduct(products);
  }, []);

  useEffect(() => {
    applyfilter();
  }, [subCategory, category, searchitem]);

  return (
    <div className="allcollection">
      <div className="filters">
        <h4>FILTERS</h4>
        <div className="hidecategory">
          <div className="category">
            <h2>CATEGORIES-</h2>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Men"}
                onChange={categorybtn}
              />
              MEN
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Women"}
                onChange={categorybtn}
              />
              WOMEN
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Kids"}
                onChange={categorybtn}
              />
              KIDS
            </p>
          </div>
          <div className="sub-category">
            <h2>TYPE-</h2>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Topwear"}
                onChange={subcategorybtn}
              />
              Topwear
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Bottomwear"}
                onChange={subcategorybtn}
              />
              Bottomwear
            </p>
            <p>
              <input
                type="checkbox"
                name=""
                id=""
                value={"Winterwear"}
                onChange={subcategorybtn}
              />
              Winterwear
            </p>
          </div>
        </div>

        <div className="showcategory">
          <i class="fa-solid fa-bars" onClick={() => setFilter(!filter)}></i>

          {filter == true ? (
            <>
              <div className="category">
                <h2>CATEGORIES-</h2>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Men"}
                    onChange={categorybtn}
                  />
                  MEN
                </p>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Women"}
                    onChange={categorybtn}
                  />
                  WOMEN
                </p>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Kids"}
                    onChange={categorybtn}
                  />
                  KIDS
                </p>
              </div>
              <div className="sub-category">
                <h2>TYPE-</h2>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Topwear"}
                    onChange={subcategorybtn}
                  />
                  Topwear
                </p>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Bottomwear"}
                    onChange={subcategorybtn}
                  />
                  Bottomwear
                </p>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={"Winterwear"}
                    onChange={subcategorybtn}
                  />
                  Winterwear
                </p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="collection-items">
        {allproduct.map((item, index) => {
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
