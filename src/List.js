import React from 'react';
import '../styles/List.css';

function list() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML List</title>
  <link rel="stylesheet" href="List.css" />
  <header>
    <h1>HTML List</h1>
  </header>
  <p>HTML lists allow web developers to group a set of related items in lists.</p>
  <section>
    <h2>Unordered HTML List</h2>
    <p> An unordered list starts with the ul tag. Each list item starts with the li tag.</p>
    <h2>ordered HTML List</h2>
    <p>An ordered list starts with the ol tag. Each list item starts with the li tag. </p>
    <h2>HTML Description Lists</h2>
    <p>HTML also supports description lists. A description list is a list of terms, with a description of each term
      <video src="videos/Lists.mp4" controls poster="videos/list.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default list;
