import React from 'react';
import '../styles/Paragraph.css';

function Paragraph() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Paragraphs</title>
  <link rel="stylesheet" href="Paragraph.css" />
  <header>
    <h1>HTML Paragraphs</h1>
  </header>
  <section>
    <h2>Headings Are Important</h2>
    <p>
      In HTML, paragraphs are created using the</p><p>tag, which is used to define blocks of text content.
    </p><p>Paragraphs help in organizing and separating content into readable sections,enhancing the structure and clarity of web pages.</p> 
    <p>By default, browsers add some space before and after each paragraph, ensuring clear visual separation.</p>
    <p>Additional styles and formatting can be applied to paragraphs using CSS to adjust their appearance, 
      such as font size, color, and alignment. </p>
    <p> This makes paragraphs an essential element for presenting text effectively in web.
      <video src="videos/Paragraphs Level 1.mp4" controls poster="videos/paragraph.jfif" width="600px">
      </video>
    </p>
  </section>
</div> );}
export default Paragraph;
