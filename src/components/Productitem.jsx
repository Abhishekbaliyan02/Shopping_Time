import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { Collection } from "./Collection";
import "./Shopping.css";
import { Relatedproduct } from "./Relatedproduct";
import { Cart } from "./Cart";
import { assets, products } from "../assets/assets";

export const Productitem = () => {
  const { products } = useContext(ShopContext);
  let { addTocart } = useContext(ShopContext);
  let { productid } = useParams();

  let [productdata, setProductdata] = useState();
  let [productimage, setProductimage] = useState();
  let [size, setSize] = useState("");

  const fetchdata = () => {
    products.map((item) => {
      if (item._id == productid) {
        setProductdata(item);
        setProductimage(item.image[0]);
        // console.log(productimage)
        return null;
      }
    });
  };

  useEffect(() => {
    fetchdata();
  }, [productid]);

  console.log(productdata);

  return productdata ? (
    <div className="product-page">
      <div className="product-details">
        <div className="images">
          {productdata.image.map((item, index) => {
            return (
              <img
                src={item}
                onClick={() => {
                  setProductimage(item);
                }}
              />
            );
          })}
        </div>
        <div className="image">
          <img src={productimage} alt="" />
        </div>
        <div className="details">
          <h2>{productdata.name}</h2>
          <p className="star-image">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <strong>(99)</strong>
          </p>
          <h1>${productdata.price}</h1>
          <p>{productdata.description}</p>
          Select in size: <br />
          {productdata.sizes.map((item, index) => {
            return (
              <button
                onClick={() => setSize(item)}
                key={index}
                className={`btns ${item === size ? "selected" : ""}`}
              >
                {item}
              </button>
            );
          })}
          <br />
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => addTocart(productid, size)}
          >
            Add to cart{" "}
          </button>
          <hr />
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product. </p>
          <p>Easy return and exchange policy within 7 days. </p>
        </div>
      </div>

      <div className="description">
        <div className="heading">
          <b>Description</b>
          <p>Review(99)</p>
        </div>
        <div className="review">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a id
          facere delectus? Sit earum nesciunt labore fuga? Repudiandae suscipit
          iste accusantium labore tempora repellendus. Omnis vitae odio dicta
          cumque optio quo necessitatibus, amet recusandae sequi aperiam ut aut
          in laborum unde iste. Quis architecto accusantium at ullam sit eos.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod
          nobis ullam nam, totam ut aspernatur accusantium ducimus! Nostrum
          quidem debitis recusandae quia quo porro fuga laborum vel quibusdam
          beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque eligendi quod beatae quasi hic modi tempore eius harum odio
          aperiam, vitae autem illo dolor non, repudiandae, alias ipsam
          voluptatum ullam.
        </div>
      </div>

      <div className="relatedproduct">
        <Relatedproduct
          category={productdata.category}
          subCategory={productdata.subCategory}
        />
      </div>
    </div>
  ) : (
    <div>not found</div>
  );
};
