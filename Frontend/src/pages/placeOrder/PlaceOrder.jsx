import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    Phone: "",
  });

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = []
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }

    let response = await axios.post(url+"/api/order/place", orderData, { headers: { token: token } })
    if(response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url)
    } else{
      console.log(response.data);
      toast.error(response.data.message)
    }
  };

  return (
    <div className="place-order">
      <div className="form-container">
        <h2>Delivery Information</h2>
        <form onSubmit={placeOrder} className="delivery-form">
          <div className="left-box">
            <div className="info ">
              <input
                required
                name="firstName"
                onChange={onChangehandler}
                value={data.firstName}
                type="text"
                placeholder="First name"
              />
              <input
                required
                name="lastName"
                onChange={onChangehandler}
                value={data.lastName}
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              required
              name="email"
              onChange={onChangehandler}
              value={data.email}
              type="email"
              placeholder="Email address"
            />
            <input
              required
              name="street"
              onChange={onChangehandler}
              value={data.street}
              type="text"
              placeholder="Street"
            />
            <div className="info">
              <input
                required
                name="city"
                onChange={onChangehandler}
                value={data.city}
                type="text"
                placeholder="City"
              />
              <input
                required
                name="state"
                onChange={onChangehandler}
                value={data.state}
                type="text"
                placeholder="State"
              />
            </div>
            <div className="info">
              <input
                required
                name="zipCode"
                onChange={onChangehandler}
                value={data.zipCode}
                type="text"
                placeholder="Zip code"
              />
              <input
                required
                name="country"
                onChange={onChangehandler}
                value={data.country}
                type="text"
                placeholder="Country"
              />
            </div>

            <input
              required
              name="Phone"
              onChange={onChangehandler}
              value={data.Phone}
              type="tel"
              placeholder="Phone"
            />
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

            <button type="submit">Procede to payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
