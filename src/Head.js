import React from 'react';
import '../styles/Head.css';

function Head() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML head elements</title>
  <link rel="stylesheet" href="Head.css" />
  <header>
    <h1>HTML - The Head Element</h1>
  </header>
  <section>
    <h2>The HTML head Element </h2>
    <p>The head element is a container for metadata (data about data) and is placed between the  tag and the  tag.
    </p><p>HTML metadata is data about the HTML document. Metadata is not displayed.</p>
    <p>HTML metadata is data about the HTML document. Metadata is not displayed.
      <video src="videos/Head&Title&favication.mp4" controls poster="videos/head.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Head;
