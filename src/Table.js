import React from 'react';
import '../styles/Table.css';

function Table() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Table</title>
  <link rel="stylesheet" href="Table.css" />
  <header>
    <h1>HTML Table</h1>
  </header>
  <p>HTML tables allow web developers to arrange data into rows and columns.</p>
  <section>
    <h2>Define an HTML Table </h2>
    <p> A table in HTML consists of table cells inside rows and columns.</p>
    <h2>Table cells</h2>
    <p>Everything between  and  are the content of the table cell. </p>
    <h2>Table Rows</h2>
    <p>Each table row starts with a  and ends with a  tag.</p>
    <h2>Table Headers</h2>
    <p>Sometimes you want your cells to be table header cells. In those cases use the  tag instead of the  tag
      <video src="videos/Table.mp4" controls poster="videos/table.png" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Table;
