import React from "react";
import "./../../CSS/production/Register.css";
import bg1 from "./../../images/Vector.png";
import bg2 from "./../../images/Vector (1).png";
import SVGicons from './../SVG/SVGicons'

const Register = () => {
  return (
    <div className="register">
      <div className="_width">
        <div className="background">
          <img src={bg1} alt="" />
          <img src={bg2} alt="" />
        </div>
        <div className="left-side">
          <form>
            <h3>Welcome!</h3>
            <div className="inputs">
              <div className="login">
                <div>
                  <SVGicons icon="user" />
                </div>
                <input type="text" placeholder="E-mail or Login" />
              </div>
              <div className="password">
                <div>
                  <SVGicons icon="lock" />
                </div>
                <input type="password" placeholder="Password" />
                <SVGicons icon="type_password" />
              </div>
            </div>
            <div className="buttons">
              <button className="sign-up">SIGN UP</button>
              <button className="sign-in">SIGN IN</button>
            </div>
            <a href="https://www.apple.com">Forgot your password?</a>
          </form>
        </div>
        <div className="right-side">
          <h1>VALUET</h1>
          <div className="line"></div>
          <p>Your currency dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
