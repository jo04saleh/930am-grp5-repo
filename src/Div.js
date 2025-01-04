import React from 'react';
import '../styles/Div.css';

function Div() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Div Tutorial</title>
  <link rel="stylesheet" href="Div.css" />
  <header>
    <h1>HTML Div Element</h1>
  </header>
  <section>
    <h2>The div Element</h2>
    <p>
      In HTML, the div tag is used to group different elements together as a single unit.
    </p><p>The div is a block-level element that is primarily used to divide and organize content,</p> 
    <p> making it easier to apply styles or formatting using CSS. </p>
    <p>It does not add any visual effect on its own but helps in logically organizing elements.
      <video src="videos/Div.mp4" controls poster="videos/div.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Div;
