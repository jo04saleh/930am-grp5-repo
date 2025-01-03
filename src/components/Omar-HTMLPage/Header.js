import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  let headerText = (
    <>
      <h1>Learn HTML</h1>
      <p>Master HTML with our Hsj</p>
    </>
  );

  if (location.pathname === "/quiz") {
    headerText = "quiz html"; 
  } else if (location.pathname === "/result") {
    headerText = ""; 
  }

  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
