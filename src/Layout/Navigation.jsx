import React from "react";
import SVGicons from './../Components/SVG/SVGicons'
import './../CSS/production/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <div className="top-side">
        <div className="title">
          <h1>VALUET</h1>
          <div className="line"></div>
        </div>
        <div className="options">
          <div>
            <SVGicons icon="overview" />
            <span>Overview</span>
          </div>
          <div>
            <SVGicons icon="wallets" />
            <span>Wallets</span>
          </div>
          <div>
            <SVGicons icon="transictions" />
            <span>Transictions</span>
          </div>
          <div className="active">
            <SVGicons icon="exchange" />
            <span>Exchange</span>
          </div>
          <div>
            <SVGicons icon="market" />
            <span>Market</span>
          </div>
        </div>
      </div>
      <div className="bottom-side">
        <div className="user">
          <div></div>
          <span>Mike Jakson</span>
        </div>
        <div className="logOut">
          <SVGicons icon="logOut" />
          <span>Log out</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
