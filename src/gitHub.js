import "./gitHub.css"
import { Link } from "react-router-dom";
function gitHub(){
    return (
        <div className="container">
           <button className="back-button">
        <Link to="/">Back</Link>
      </button>
  <a href="https://github.com" target="_blank">
    <img src="github logo.png" alt="GitHub Logo" className="github-logo" /></a>
  <div className="content">
    <h1>Steps to Create a GitHub Account and Link It to Visual Studio Code</h1>
    <ol>
      <li>
        <strong>Create a GitHub Account:</strong>
        <ul>
          <li>Go to <a href="https://github.com" target="_blank">GitHub</a> and click <strong>Sign up</strong>.</li>
          <li>Fill in your email, password, and username.</li>
          <li>Verify your email and set up your account (choose the free plan).</li>
        </ul>
      </li>
      <li>
        <strong>Install Git and Visual Studio Code:</strong>
        <ul>
          <li>Download Git from <a href="https://git-scm.com/" target="_blank">here</a> and install it.</li>
          <li>Download Visual Studio Code from <a href="https://code.visualstudio.com/" target="_blank">here</a> and
            install it.</li>
        </ul>
      </li>
      <li>
        <strong>Link GitHub to Visual Studio Code:</strong>
        <ul>
          <li>Install the <strong>GitHub Pull Requests and Issues</strong> extension in VS Code.</li>
          <li>Sign in to GitHub via VS Code by opening the Command Palette and selecting <strong>GitHub: Sign
              In</strong>.</li>
          <li>Authorize VS Code to access your GitHub account in the browser.</li>
          <li>Configure Git with your username and email in the terminal:</li>
          <pre><code>git config --global user.name "Your GitHub Username"{"\n"}{"    "}git config --global user.email "Your GitHub Email"</code></pre>
        </ul>
      </li>
      <li>
        <strong>Verify the Connection:</strong>
        <ul>
          <li>Open a repository in VS Code and check the Source Control panel.</li>
          <li>Make changes, stage, commit, and push them to GitHub using the terminal or Source Control interface.
          </li>
        </ul>
      </li>
    </ol>
  </div>
</div>

      )}
export default gitHub;