import '../styles/Charset.css';
import React from 'react';

function Charset() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Charset</title>
  <link rel="stylesheet" href="Charset.css" />
  <header>
    <h1>Html Charset</h1>
  </header>
  <section>
    <h2>The Html Charset</h2>
    <p>
    </p><p> In HTML, the charset (character set) defines the encoding system used to represent text on a webpage. </p>
    <p>t ensures that the characters displayed are correctly interpreted by browsers, especially when using special or non-Latin characters. The charset is specified using the <meta /> tag in the  section of an HTML document. </p>
    <p>The most commonly used charset is UTF-8, which supports a wide range of characters from different languages and symbols.</p>
    <p />
  </section>
</div> );
}
export default Charset;
