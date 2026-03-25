import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Dessert = ({ dessert }) => {
  return (
    <div className="dessert">
      <Link to={`/desserts/${dessert.id}`}>
        <figure className="dessert__img--wrapper">
          <img src={dessert.url} alt="" className="dessert__img" />
        </figure>
      </Link>
      <div className="dessert__title">
        <Link to={`/desserts/${dessert.id}`} className="dessert__title--link">
          {dessert.title}
        </Link>
      </div>
      <Rating rating={dessert.rating} />
     <Price salePrice={dessert.salePrice} originalPrice={dessert.originalPrice} />
    </div>
  );
};

export default Dessert;
