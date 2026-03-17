import React from "react";
import emptyCart from "../assets/empty_cart.svg";
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
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
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
                  cart.map((book) => {
                    return (
                      <div className="cart__item" key={book.id}>
                        <div className="cart__book">
                          <img
                            src={book.url}
                            className="cart__book--img"
                            alt=""
                          />
                          <div className="cart__book--info">
                            <span className="cart__book--title">
                              {book.title}
                            </span>
                            <span className="cart__book--price">
                              $
                              {(book.salePrice || book.originalPrice).toFixed(
                                2,
                              )}
                            </span>
                            <button
                              className="cart__book--remove"
                              onClick={() => removeFromCart(book)}
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
                            value={book.quantity}
                            onChange={(event) =>
                              changeQuantity(book, event.target.value)
                            }
                          />
                        </div>
                        <div className="cart__total">
                          $
                          {(
                            (book.salePrice || book.originalPrice) *
                            book.quantity
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
                <Link to="/books">
                  <button className="btn btn__checkout">Explore Books</button>
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
