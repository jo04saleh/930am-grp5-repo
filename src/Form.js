import React from 'react';
import '../styles/Form.css';

function Form() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Form</title>
  <link rel="stylesheet" href="Form.css" />
  <header>
    <h1>HTML Form</h1>
  </header>
  <section>
    <h2>The HTML Form </h2>
    <p>HTML forms are used to collect user input and send it to a server for processing.
    </p><p> The form element acts as a container for form controls like text fields input,</p>
    <p>drop-down menus (select), buttons (button), and more. Forms enable user interactions such as login,</p>
    <p> registration, and data submission, making them essential for creating dynamic and interactive web applications.</p>
    <p>They support various attributes for customization, validation, and data handling.
      <video src="videos/Forms.mp4" controls poster="videos/form.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Form;
