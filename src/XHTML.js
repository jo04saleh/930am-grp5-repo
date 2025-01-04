import React from 'react';
import '../styles/XHTML.css';

function XHTML () {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Versus XHTML</title>
  <link rel="stylesheet" href="HTML vs.XHTML.css" />
  <header>
    <h1>HTML Versus XHTML</h1>
    <p>XHTML is a stricter, more XML-based version of HTML.</p>
  </header>
  <section>
    <h2>What is XHTML?</h2>
    <p>
      XML is a markup language where all documents must be marked up correctly (be "well-formed").
    </p><p>XHTML was developed to make HTML more extensible and flexible to work with other data formats (such as XML). </p>
    <p>In addition, browsers ignore errors in HTML pages, and try to display the website even if it has some errors in the markup. </p>
    <p>So XHTML comes with a much stricter error handling. </p>
    <p />
    <h2>The Most Important Differences from HTML</h2>
    <p>!DOCTYPE is mandatory</p>
    <p>The xmlns attribute in  is mandatory
    </p>
    <p>html,head,title, and body are mandatory
    </p>
    <p>Elements must always be properly nested
    </p>
    <p>Elements must always be closed
    </p>
    <p>Elements must always be in lowercase
    </p>
    <p>Attribute names must always be in lowercase
    </p>
    <p>Attribute values must always be quoted
    </p>
    <p>Attribute minimization is forbidden
    </p>
  </section>
</div>);}
export default XHTML;
