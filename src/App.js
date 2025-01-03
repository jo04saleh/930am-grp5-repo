import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Omar-HTMLPage/Card";
import Header from "./components/Omar-HTMLPage/Header";
import Quiz from "./components/Omar-QuizsHtml/Quiz";
import Result from "./components/Omar-QuizsHtml/Result";
import "./omar.css";


const cardData = [
  {
    imgSrc: "level1.jpg",
    altText: "Level 1: Basics",
    title: "Level 1: Basics",
    description: "Start your HTML journey with fundamentals",
    link: "https://www.w3schools.com/html/",
    buttonText: "Start Learning",
    buttonClass: "level1",
  },
  {
    imgSrc: "level2.jpg",
    altText: "Level 2: Intermediate",
    title: "Level 2: Intermediate",
    description: "Advance your HTML skills",
    link: "https://www.w3schools.com/html/html5_intro.asp",
    buttonText: "Continue Learning",
    buttonClass: "level2",
  },
  {
    imgSrc: "level3.jpg",
    altText: "Level 3: Advanced",
    title: "Level 3: Advanced",
    description: "Master complex HTML concepts",
    link: "https://www.w3schools.com/html/html_forms.asp",
    buttonText: "Master HTML",
    buttonClass: "level3",
  },
  {
    imgSrc: "quiz.jpg",
    altText: "HTML Quizzes",
    title: "HTML Quizzes",
    description: "Test your knowledge",
    link: "/quiz", // التوجيه إلى صفحة الكويز
    buttonText: "Take Quiz",
    buttonClass: "quiz",
  },
];


const questions = [
  { question: "What is the main tag used to define the structure of an HTML document?", answers: ["<head>", "<html>", "<div>", "<body>"], correct: 1 },
  { question: "Which tag is used to create a hyperlink in HTML?", answers: ["<link>", "<url>", "<a>", "<href>"], correct: 2 },
  { question: "Which tag is used to display a heading in HTML?", answers: ["<p>", "<title>", "<header>", "<h1>"], correct: 3 },
  { question: "Which tag is used to create an ordered list?", answers: ["<ol>", "<list>", "<li>", "<ul>"], correct: 0 },
  { question: "How do you add an image in HTML?", answers: ["<photo>", "<image>", "<img>", "<picture>"], correct: 2 },
  { question: "What attribute specifies the destination URL of a hyperlink?", answers: ["src", "href", "url", "link"], correct: 1 },
  { question: "Which HTML element is used to define a table row?", answers: ["<row>", "<td>", "<table-row>", "<tr>"], correct: 3 },
  { question: "What does the <title> tag define in an HTML document?", answers: ["The footer", "The page title", "A heading", "A paragraph"], correct: 1 },
  { question: "What is the correct way to specify an email link?", answers: ["<mail:example@example.com>", "<a href='mailto:example@example.com'>", "<email>example@example.com</email>", "<a href='email:example@example.com'>"], correct: 1 },
  { question: "Which tag is used to embed a video in HTML5?", answers: ["<media>", "<video>", "<movie>", "<embed>"], correct: 1 },
  { question: "What does the <meta> tag do in an HTML document?", answers: ["Defines a navigation bar", "Defines an image", "Creates a table", "Provides metadata about the document"], correct: 3 },
  { question: "Which attribute is used to define a unique identifier for an HTML element?", answers: ["class", "key", "id", "name"], correct: 2 },
  { question: "What is the purpose of the <figure> and <figcaption> tags in HTML5?", answers: ["To define a header and footer", "To add metadata", "To group media content and provide a caption", "To create a table"], correct: 2 },
  { question: "Which attribute is used to specify inline CSS styles for an element?", answers: ["class", "style", "css", "inline"], correct: 1 },
  { question: "What is the difference between <strong> and <b> tags in HTML?", answers: [
      "<b> adds emphasis, while <strong> doesn't.",
      "<b> is for italic text, and <strong> is for bold text.",
      "They both make text bold, but <strong> also conveys importance.",
      "There is no difference."
    ], correct: 2 
  },
  { question: "Which HTML tag is used to define a navigation bar?", answers: ["<nav>", "<menu>", "<ul>", "<div>"], correct: 0 },
  { question: "Which attribute is used to open a link in a new tab?", answers: ["target='_blank'", "href='_new'", "rel='newTab'", "link='_tab'"], correct: 0 },
  { question: "What is the purpose of the <blockquote> tag in HTML?", answers: ["To display large quotes", "To style text as bold", "To add a block of code", "To italicize text"], correct: 0 },
  { question: "Which tag is used to create a dropdown list in HTML?", answers: ["<list>", "<dropdown>", "<select>", "<options>"], correct: 2 },
  { question: "What does the <section> tag represent in HTML5?", answers: ["A navigation bar", "A section in a document", "A footer", "A form"], correct: 1 },
];

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import GitHub from "./gitHub";

function HomePage() {
  return (
    <Router>
   
      <Header />
      
    
      <Routes>
      
        <Route
          path="/"
          element={
            <div className="cards">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  imgSrc={card.imgSrc}
                  altText={card.altText}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  buttonText={card.buttonText}
                  buttonClass={card.buttonClass}
                />
              ))}
            </div>
          }
        />
      
        <Route path="/quiz" element={<Quiz questions={questions} />} />
       
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
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
