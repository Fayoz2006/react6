import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
    </>
  );
};

export default Layout