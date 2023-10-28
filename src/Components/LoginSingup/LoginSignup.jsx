import React from 'react';
import "./LoginSignup.css";
import userIcon from "../Assets/user-icon.png";

const LoginSignup = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text">Signup</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={userIcon} alt='' />
                <input type="text" placeholder='Enter username' />
            </div>
            <div className="input">
                <img src={userIcon} alt='' />
                <input type="email" placeholder='Enter email' />
            </div>
            <div className="input">
                <img src={userIcon} alt='' />
                <input type="password" placeholder='Enter password' />
            </div>
            <div className="forgot-password">Lost Password ? <span>Click here</span></div>
            <div className="submit-container">
                <div className="submit">Signup</div>
                <div className="submit">Login</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
