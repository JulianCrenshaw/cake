import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Dessert from "../components/ui/Dessert";

const DessertInfo = ({ desserts, addToCart, cart }) => {
  const { id } = useParams();
  const dessert = desserts.find((dessert) => +dessert.id === +id);


  function addDessertToCart(dessert) {
    addToCart(dessert);
  }    

  function dessertExistsOnCart() {
   return cart.find(dessert => +dessert.id === +id);

  }

  return (
    <div id="desserts__body">
      <main id="desserts__main">
        <div className="desserts__container">
          <div className="row">
            <div className="dessert__selected--top">
              <Link to="/desserts" className="dessert__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/desserts" className="dessert__link">
                <h2 className="dessert__selected--title--top">Desserts</h2>
              </Link>
            </div>
            <div className="dessert__selected">
              <figure className="dessert__selected--figure">
                <img src={dessert.url} alt="" className="dessert__selected--img" />
              </figure>
              <div className="dessert__selected--description">
                <h2 className="dessert__selected--title">{dessert.title}</h2>
                <Rating rating={dessert.rating} />
                <div className="dessert__selected--price">
                  <Price
                    originalPrice={dessert.originalPrice}
                    salePrice={dessert.salePrice}
                  />
                </div>
                <div className="dessert__summary">
                  <h3 className="dessert__summary--title">Summary</h3>
                  <p className="dessert__summary--para">
                    An amazing dessert about a great deal of practice in how to
                    achieve success in a interview for a coding job near your
                    location weather if it is long term or short term. More
                    desserts like this are availabe below!
                  </p>
                  <p className="dessert__summary--para">
                    An amazing dessert about a great deal of practice in how to
                    achieve success in a interview for a coding job near your
                    location weather if it is long term or short term. More
                    desserts like this are availabe below!
                  </p>
                </div>
                {dessertExistsOnCart() ? (
                  <Link to="/cart">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addDessertToCart(dessert)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="desserts__container">
          <div className="row">
            <div className="dessert__selected--top">
              <h2 className="dessert__selected--title--top">Recommended desserts</h2>
            </div>
            <div className="desserts">
              {desserts
                .filter((dessert) => dessert.rating === 5 && +dessert.id !== +id)
                .slice(0, 4)
                .map((dessert) => (
                  <Dessert dessert={dessert} key={dessert.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DessertInfo;
