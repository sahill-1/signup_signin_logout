import React from 'react';
import { useState } from 'react';
import "./LoginSignup.css";
import userIcon from "../Assets/user-icon.png";

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login" ? <div></div> : <div className="input">
                <img src={userIcon} alt='' />
                <input type="text" placeholder='Enter username' />
            </div>}
            
            <div className="input">
                <img src={userIcon} alt='' />
                <input type="email" placeholder='Enter email' />
            </div>
            <div className="input">
                <img src={userIcon} alt='' />
                <input type="password" placeholder='Enter password' />
            </div>

            {action==="Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password ? <span>Click here</span></div>}
            
            
            <div className="submit-container">
                <div className={action==="Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Signup</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
