import React, {  useContext, useState } from "react";
import "./LoginPopup.css";
import { StoreContext } from "../context/StoreContext";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopup = ({showLogin, setShowLogin}) => {
  const [loginState, setLoginState] = useState("sign up");
  const [data, setdata] = useState(
    {
      name:"",
      email: "",
      password: ""
    }
  )

  const {url, setToken} = useContext(StoreContext)

  const onChangehandler = (event)=> {
    const name = event.target.name
    const value = event.target.value

    setdata(data =>({...data, [name]: value}))
  }

  const onLogin = async (event)=> {
    event.preventDefault()
    let newUrl = url
    if(loginState === 'log in') {
      newUrl += "/api/user/login"
    }else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)

    if(response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false);
    } else {
      toast.error(response.data.message || "Error");
    }
  } 

  return (
    <div className="login-popup">
      <div className="login-signup-box">
        <h2>{loginState === "sign up" ? "Sign up" : "Login"}</h2>
        <form onSubmit={onLogin}>
          {loginState === "sign up" && <input name = 'name' onChange={onChangehandler} value={data.name} className="input-option" type="text" placeholder="Name" />}
          <input name="email" onChange={onChangehandler} value={data.email} className="input-option" type="email" placeholder="Email" />
          <input name="password" onChange={onChangehandler} value={data.password} className="input-option" type="password" placeholder="Password" />
          <button type="submit" className="btn">{loginState === "sign up" ? "Sign up" : "Login"}</button>
        </form>
        {loginState === "sign up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setLoginState("log in")}> Login</span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setLoginState("sign up")}> Sign up</span>
          </p>
        )}
        <p onClick={()=>setShowLogin(false)} className="close">X</p>
      </div>
      
    </div>
  );
};

export default LoginPopup;
