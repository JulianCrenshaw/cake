
import React from "react";
import Dessert from "./ui/Dessert";
import { desserts } from "../data";

const Features = () => {
  console.log(desserts);
  console.log();
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="blue">Desserts</span>
          </h2>
          <div className="books">
            {desserts
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Dessert book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
