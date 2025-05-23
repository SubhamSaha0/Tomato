import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [token, setToken] = useState("");

  const [food_list, setFoodList] = useState([]);

  const url = "https://tomato-backend-8yug.onrender.com" 

  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token) {
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token) {
      await axios.post(url+"/api/cart/remove", {itemId},{ headers:{token}})
    }
  };

  const fetchFoodList = async ()=>{
    const response = await axios.get(url + "/api/food/list")
    setFoodList(response.data.data)
  }

  const loadCartdata = async(token)=>{
    const response = await axios.post(url+"/api/cart/get", {}, {headers: {token}}) 
    // console.log(res.data.cartData)
    setCartItems(response.data.cartData);
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      const token = localStorage.getItem("token")
      if(token){
        setToken(token)
        await loadCartdata(localStorage.getItem("token"))
      }
    }
    loadData();
  }, [])

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount, 
    url, 
    token, 
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
