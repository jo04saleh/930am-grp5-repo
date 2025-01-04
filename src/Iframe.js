import React from 'react';
import '../styles/Iframe.css';

function Iframe () {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Iframe</title>
  <link rel="stylesheet" href="Iframe.css" />
  <header>
    <h1>Html Iframe</h1>
  </header>
  <section>
    <h2>Chapter Summary</h2>
    <p>
    </p><p> The HTML iframe tag specifies an inline frame</p>
    <p>The src attribute defines the URL of the page to embed</p>
    <p>Always include a title attribute (for screen readers) </p>
    <p>The height and width attributes specify the size of the iframe </p>
    <p> Use border:none; to remove the border around the iframe </p>
    <p />
  </section>
</div>);}
export default Iframe;
