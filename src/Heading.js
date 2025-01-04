import React from 'react';
import '../styles/Heading.css';

function Heading() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Headings</title>
  <link rel="stylesheet" href="heading.css" />
  <header>
    <h1>Html Headings</h1>
  </header>
  <section>
    <h2>Headings Are Important</h2>
    <div className="body">
      <p>Heading elements in HTML are used to define the main and subheadings within web pages,</p>
      <p>helping to organize content and improve its readability. Headings are represent and they also enhance Search</p> 
      <p> Engine Optimization (SEO) by assisting search engines in understanding the structure 
        <video src="videos/Heading Level 1.mp4" controls poster="videos/heading.jfif" width="700px">
        </video>
      </p>
    </div>
  </section>
</div>);}
export default Heading;
