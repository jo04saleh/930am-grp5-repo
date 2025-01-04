import React from 'react';
import '../styles/Comments.css';

function Comments() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Comments</title>
  <link rel="stylesheet" href="Comments.css" />
  <header>
    <h1>HTML Comments</h1>
  </header>
  <section>
    <h2>Html Commet Tag</h2>
    <p>An HTML comment is used to add notes or explanations within the code without affecting how the page is displayed in the browser.
      It is written within the {/* */} tag.
    </p><p>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.
      <video src="videos/Comments Level 1.mp4" controls autoPlay poster="videos/comments.png" width="600px">
      </video>
    </p>
  </section>
</div>
  );}
export default Comments  ;
