import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ isLoggedIn }) => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer>
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Learn more about team.</p>
        <Link to="/about"> Hsj Team </Link>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: Hsj @WEB.com</p>
        <p>Phone: +111</p>
      </div>
      <div className="footer-section">
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/references">References</Link>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/ANajahUni">Facebook</a>
      </div>
      <div className="footer-section">
        <p>{currentYear} Hsj Courses. The Best World of Programming</p>
      </div>
    </footer>
  );
};

export default Footer;
