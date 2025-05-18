import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const cartIsEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0 || !quantity
  );
  const [totalPrice, setTotalPrice] = useState(10);

  return (
    <>
      {cartIsEmpty ? (
        <div className="empty-cart">
          <img src={assets.empty_cart} alt="Empty cart" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <div>
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div
                      className="cart-items-title cart-items-item"
                      key={item._id}
                    >
                      <img src={url+"/images/"+item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p onChange={() => setTotalPrice(12)}>
                        ${item.price * cartItems[item._id]}
                      </p>
                      <p
                        className="remove"
                        onClick={() => removeFromCart(item._id)}
                      >
                        X
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="cart-summary">
            <h2>Cart Totals</h2>
            <div className="sub-total">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="delivery-fee">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>

            <Link to='/place-order'><button >Procede to checkout</button></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
