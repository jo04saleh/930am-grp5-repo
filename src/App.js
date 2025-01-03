import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import GitHub from "./gitHub";

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <div className="logo-container">
              <img className="logo" src="logo.jpg" alt="Logo" />
            </div>
          </Link>
          <ul className="menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
          <div className="login"><a href="#">Login</a></div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Learn to Code</h1>
          <p>Master HTML, CSS, and JavaScript with HsJ</p>
          <div className="buttons">
            <Link to="/github">
              <button className="btn-primary">Start with GitHub</button>
            </Link>
            <a href="#html-section">
              <button className="btn-secondary">View About</button>
            </a>
          </div>
        </section>
        <section className="cards">
          <div className="card">
            <h2>HTML</h2>
            <p>Learn the fundamentals of web structure and semantics</p>
            <Link to="/html">
              <button className="btn-primary">Learn HTML</button>
            </Link>
          </div>
          <div className="card">
            <h2>CSS</h2>
            <p>Master styling and responsive design techniques</p>
            <Link to="/css">
              <button className="btn-primary">Learn CSS</button>
            </Link>
          </div>
          <div className="card">
            <h2>JavaScript</h2>
            <p>Build interactive and dynamic web applications</p>
            <Link to="/javascript">
              <button className="btn-primary">Learn JavaScript</button>
            </Link>
          </div>
        </section>
      </main>
      <main>
        <section id="html-section" className="hero2">
          <div className="section section1">
            <h2>HTML</h2>
            <p>Learn the fundamentals of web structure and semantics</p>
            <div className="buttons">
              <Link to="/html">
                <button className="btn-primary">Learn HTML</button>
              </Link>
              <button className="btn-primary">Video Tutorial</button>
            </div>
          </div>
        </section>
        <section id="css-section" className="hero2">
          <div className="section section2">
            <h2>CSS</h2>
            <p>Master styling and responsive design techniques</p>
            <div className="buttons">
              <Link to="/css">
                <button className="btn-primary">Learn CSS</button>
              </Link>
              <button className="btn-primary">Video Tutorial</button>
            </div>
          </div>
        </section>
        <section id="js-section" className="hero2">
          <div className="section section3">
            <h2>JavaScript</h2>
            <p>Build interactive and dynamic web applications</p>
            <div className="buttons">
              <Link to="/javascript">
                <button className="btn-primary">Learn JavaScript</button>
              </Link>
              <button className="btn-primary">Video Tutorial</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/html" element={<div><h2>HTML Page</h2></div>} />
        <Route path="/css" element={<div><h2>CSS Page</h2></div>} />
        <Route path="/javascript" element={<div><h2>JavaScript Page</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;
