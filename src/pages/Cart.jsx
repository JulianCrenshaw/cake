import React from "react";
import emptyCart from "../assets/undraw_cooking.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return price.toFixed(2);
  };
  const subtotal = Number(total());
  const tax = (subtotal * 0.1).toFixed(2);
  const totalPrice = (subtotal + Number(tax)).toFixed(2);
  return (
    <div id="desserts__body">
      <main id="desserts__main">
        <div className="desserts__container">
          <div className="row">
            <div className="dessert__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__dessert">Dessert</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.length === 0 ? (
                  <h2 className="cart__empty">
                    <img
                      src={emptyCart}
                      alt="Empty Cart"
                      className="cart__empty--img"
                    />
                    You have no items here!!
                  </h2>
                ) : (
                  cart.map((dessert) => {
                    return (
                      <div className="cart__item" key={dessert.id}>
                        <div className="cart__dessert">
                          <img
                            src={dessert.url}
                            className="cart__dessert--img"
                            alt=""
                          />
                          <div className="cart__dessert--info">
                            <span className="cart__dessert--title">
                              {dessert.title}
                            </span>
                            <span className="cart__dessert--price">
                              $
                              {(dessert.salePrice || dessert.originalPrice).toFixed(
                                2,
                              )}
                            </span>
                            <button
                              className="cart__dessert--remove"
                              onClick={() => removeFromCart(dessert)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            className="cart__input"
                            value={dessert.quantity}
                            onChange={(event) =>
                              changeQuantity(dessert, event.target.value)
                            }
                          />
                        </div>
                        <div className="cart__total">
                          $
                          {(
                            (dessert.salePrice || dessert.originalPrice) *
                            dessert.quantity
                          ).toFixed(2)}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="total__item total__sub-tax">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
              <div className="total__item total__sub-price">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
              {cart.length === 0 ? (
                <Link to="/desserts">
                  <button className="btn btn__checkout">Explore Desserts</button>
                </Link>
              ) : (
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`havent finished`)}
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
