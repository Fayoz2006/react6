import React from "react";
import SVGicons from './../Components/SVG/SVGicons';
import './../CSS/production/Header.css'

const Header = () => {
  return (
    <header>
      <form>
        <input type="text" />
        <SVGicons icon="search" />
      </form>
      <div className="icons">
        <SVGicons icon="e-mail"/>
        <SVGicons icon="bell"/>
      </div>
    </header>
  );
};

export default Header;
