import React from 'react';
import '../styles/URL.css';

function URL() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML URL Uncoding</title>
  <link rel="stylesheet" href="URL Uncode.css" />
  <header>
    <h1>HTML Uniform Resource Locators</h1>
    <p>A URL is another word for a web address.
    </p><p> A URL can be composed of words (e.g. w3schools.com), or an Internet Protocol (IP) address (e.g. 192.68.20.50).</p>
    <p>Most people enter the name when surfing, because names are easier to remember than numbers.</p>
    <p />
  </header>
  <section>
    <h2>URL - Uniform Resource Locator</h2>
    <p>
      Web browsers request pages from web servers by using a URL.
    </p><p>A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.</p>
    <p />
    <h2>URL Encoding</h2>
    <p>URLs can only be sent over the Internet using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL has to be converted.
    </p><p>URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet.</p> 
    <p>    URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits.</p>    
    <p>    URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.</p>    
    <p />
  </section>
</div>);}
export default URL;
