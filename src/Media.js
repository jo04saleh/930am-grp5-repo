import React from 'react';
import '../styles/Media.css';

function Media () {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Media</title>
  <link rel="stylesheet" href="Media.css" />
  <header>
    <h1>Html Media</h1>
  </header>
  <section>
    <h2>The HTML Media</h2>
    <p>HTML Media elements are used to embed multimedia content like audio, video, and images into a webpage.
    </p><p>The audio and videoelements allow seamless integration of sound and video files,</p>
    <p>with support for controls like play, pause, and volume adjustment. Additionally,</p>
    <p> the img  element is used to display images. These elements enhance user engagement and provide a richer web experience by incorporating interactive and visual content directly 
      <video src="videos/Media.mp4" controls poster="videos/media.jfif" width="600px">
      </video>
    </p>
  </section>
</div>);}
export default Media;
