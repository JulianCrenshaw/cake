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
              para="Choose from cakes, cookies, and more with our vast inventory"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Daily Deals"
              para="Look out for new deals and promotions on our sweets"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
