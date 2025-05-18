import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import {assets} from "../../assets/assets.js"

const List = ({url}) => {
  // const url = "http://localhost:4000";

  const [list, setList] = useState([]);

  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove/`, {id:foodId});
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
    await fetchList();
  }

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {list.length === 0 && (
         <div className="empty-cart">
         <img src={assets.empty_cart} alt="Empty cart" />
         <h2>Your cart is empty</h2>
         <p>Looks like you haven't added anything to your cart yet.</p>
       </div>
      )}
      
      {list.length > 0 && (
        <div className="list add flex-col">
          <p>All Food List</p>
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="delete-icon">X</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default List;
