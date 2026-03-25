
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
          <div className="desserts">
            {desserts
              .filter((dessert) => dessert.rating === 5)
              .slice(0, 4)
              .map((dessert) => (
                <Dessert dessert={dessert} key={dessert.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
