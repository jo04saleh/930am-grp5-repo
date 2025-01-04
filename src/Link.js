import React from 'react';
import '../styles/Link.css';

function Link() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Link Hyperlinks</title>
  <link rel="stylesheet" href="Link.css" />
  <header>
    <h1>HTML Links</h1>
  </header>
  <section>
    <h2>HTML Links-Syntak</h2>
    <p>
    </p><p>An HTML link is used to connect one webpage to another, or to external resources, such as images, stylesheets, or files.</p>
    <p>The link is created using the a (anchor)tag,withthe href attribute specifying the destination URL.
      <video src="videos/Linke.mp4" controls poster="videos/link.jfif" width="700px">
      </video>
    </p>
  </section>
  <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>
</div>);}
export default Link;
