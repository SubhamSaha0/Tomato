import React from 'react'
import "./Orders.css"
import { useState } from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assets.js';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    } else {
      toast.error("Failed to fetch the order data")
    }
  }

  const statusHandler = async(event, orderId)=>{
    const response = await axios.post(url+"/api/order/status", {orderId, status: event.target.value})  
    if(response.success) {
      await fetchAllOrders()
    }  
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='order '>
      <h3>Order page</h3>
      <div className="container">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            {/* <div> */}
            <p className="order-item-food">
              {order.items.map((item, index) => {
                if (index == order.items.length - 1) {
                  return (
                    item.name + " x " + item.quantity
                  )
                } else {
                  return (
                    item.name + " x " + item.quantity + ", "
                  )
                }
              })}
            </p>
            <p className="name">{order.address.firstName} {order.address.lastName}</p>
            <div className='order-item-address'>
              <p>{order.address.street}, {order.address.city} - {order.address.zipCode}</p>
              <p>{order.address.Phone}</p>
            </div>
            <div className='quantity-price'>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}.00</p>
            </div>
            <select onChange={(evevnt)=>statusHandler(evevnt, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Deliverd">Deliverd</option>
            </select>
          </div>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default Orders