
import React from 'react';
import '../styles/Charset.css';


function Block() {
return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Block and Inline Elements</title>
  <link rel="stylesheet" href="Block-Inline.css" />
  <header>
    <h1>HTML Block and Inline Elements</h1>
  </header>
  <p>Every HTML element has a default display value, depending on what type of element it is.
    The two most common display values are block and Inline</p>
  <section>
    <h2>Summary HTML Block and Inline Elements</h2>
    <p> 
      A block-level element always starts on a new line and takes up the full width available
    </p><p>An inline element does not start on a new line and it only takes up as much width as necessary</p>
    <p>The div element is a block-level and is often used as a container for other HTML elements</p>
    <p>The span element is an inline container used to mark up a part of a text, or a part of a document           
    <video src="/Inline_Block_Level1.mp4"
          controls
          poster="/inline_block.png"
          width="600px">
      </video>
    </p>
  </section>
</div>
  );
}

export default Block;
