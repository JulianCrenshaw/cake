import React from "react";
import { desserts } from "../data";
import Dessert from "./ui/Dessert";

const Discounted = () => {
  return (
    <section id="discounted">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            What <span className="blue">Desserts</span> are on sale
          </h2>
          <div className="desserts">
            {desserts
            .filter(dessert => dessert.salePrice > 0)
            .slice(0, 8)
            .map((dessert) => (
              <Dessert dessert={dessert} key={dessert.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
