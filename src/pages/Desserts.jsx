import React, { useState } from "react";
import Dessert from "../components/ui/Dessert.jsx"

const Desserts = ({ desserts: initialDesserts }) => {
    const [desserts, setDesserts] = useState(initialDesserts)

    function filterDesserts(filter) {
        console.log(filter)
        if (filter === 'LOW_TO_HIGH') {
            setDesserts(desserts.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        if (filter === 'HIGH_TO_LOW') {
            setDesserts(desserts.slice().sort((a, b) => (b.salePrice || b.OriginalPrice) - (a.saleprice || a.originalPrice)))
        }
        if (filter === 'RATING') {
            setDesserts(desserts.slice().sort((a, b) => (b.rating || a.rating)))
        }
    }
  return (
    <div id="desserts__body">
      <main id="desserts__main">
        <section>
          <div className="desserts__container">
            <div className="row">
              <div className="desserts__header">
                <h2 className="section__title desserts__header--title">
                  All Desserts
                </h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterDesserts(event.target.value)}>
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="desserts">
                {desserts.map((dessert) => (
                  <Dessert dessert={dessert} key={dessert.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desserts;
