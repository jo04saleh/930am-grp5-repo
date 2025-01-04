import React from 'react';
import '../styles/Id.css';

function Id () {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML-The id attribute </title>
  <link rel="stylesheet" href="Id.css" />
  <header>
    <h1>HTML id Attribute</h1>
  </header>
  <section>
    <h2>Using The id Attribut</h2>
    <p>The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.
    </p><p>The id attribute is used to point to a specific style declaration in a style sheet.</p>            
    <p>It is also used by JavaScript to access and manipulate the element with the specific id.</p> 
    <p>The syntax for id is: write a hash character (#), followed by an id name </p>
    <p>Then, define the CSS properties within curly braces {'{'}{'}'}.</p> 
    <p />
  </section>
</div>);}
export default Id;
