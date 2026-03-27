import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section className="" id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Interested in our <span className="blue">Bakery</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="cake" />}
              title="Fresh and Ready"
              para="Each order will be ready fresh and decorated the day of pick up"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="cookie-bite" />}
              title="Variety of Desserts"
              para="Library has books in all your favorite catagories"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
