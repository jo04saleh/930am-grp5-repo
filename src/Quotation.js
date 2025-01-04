import React from 'react';
import '../styles/Quotation.css';

function Quotation() {
  return (<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> </title>
  <link rel="stylesheet" href="Quotation.css" />
  <header>
    <h1>HTML Quotation and Citation Elements</h1>
    <p>In this chapter we will go through the blockquote, q, abbr, address, cite, and bdo HTML elements.</p>
  </header>
  <section>
    <h2>HTML Quotation and Citation Elements</h2>
    <p>Quotation elements in HTML are used to highlight text that is quoted or sourced from other materials. The blockquote element is used for longer quotes, typically displayed as separate blocks from the main text. For shorter,</p>
    <p>inline quotes, the <q> element is used, which automatically adds quotation marks around the text based on the page's language settings.</q></p>                 
    <p>These elements enhance structure, accessibility, and search engine accuracy.
      <video src="videos/Quotation.mp4" controls poster="videos/quotation.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Quotation;
