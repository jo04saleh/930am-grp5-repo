import React from 'react';
import '../styles/Entities.css';

function Entities() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Character Entities</title>
  <link rel="stylesheet" href="Entities.css" />
  <header>
    <h1>HTML Entities </h1>
  </header>
  <section>
    <h2>HTML Character Entities</h2>
    <p>In HTML, entities are special codes used to represent characters that have a reserved meaning in HTML or cannot be typed directly. </p>
    <p>These entities begin with an ampersand (&amp;) and end with a semicolon (;). For example, &lt; represents the less-than sign (&lt;), and &gt; represents the greater-than sign (&gt;).</p> 
    <p>Entities are used to display characters like quotation marks (") or non-printable symbols that might otherwise interfere with the HTML code.</p>
    <p>They help ensure that special characters are rendered correctly in web pages.</p>
  </section>
</div>);}
export default Entities;
