<div id="readme" class="Box-body readme blob js-code-block-container">
  <article class="markdown-body entry-content p-3 p-md-6" itemprop="text">
    <p align="center"><img alt="logo" src="https://github.com/gisabernardess/github-repo-list/blob/main/.github/logo.svg"></p>
    <h2>:rocket: Technologies</h2>
    <p>Server-side was developed with the following technologies:</p>
    <ul>
      <li><a href="https://nodejs.org/" rel="nofollow">node.js</a></li>
      <li><a href="https://expressjs.com/" rel="nofollow">express</a></li>
      <li><a href="https://nodemon.io/" rel="nofollow">nodemon</a></li>
      <li><a href="https://github.com/alangpierce/sucrase" rel="nofollow">sucrase</a></li>
      <li><a href="https://developer.github.com/v3/" rel="nofollow">GitHub REST API v3</a></li>
      <li><a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a> with <a
          href="https://eslint.org/" rel="nofollow">ESLint</a>
        + <a href="https://prettier.io/" rel="nofollow">Prettier</a> 
        + <a href="https://editorconfig.org/" rel="nofollow">EditorConfig</a></li>
    </ul>
    <h2>:information_source: How To Use</h2>
    <p>To run this API, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a>, <a
        href="https://nodejs.org/" rel="nofollow">Node.js</a> and <a href="https://legacy.yarnpkg.com"
        rel="nofollow">Yarn</a>. From your command line:</p>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c">#</span> Be into the repository</span>
$ <span class="pl-c1">cd</span> github-repo-list/server <br/>
<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ yarn <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the development server</span>
$ yarn dev <br/>
<span class="pl-c"><span class="pl-c">#</span> The app will automatically reload if you change any of the source files.</span></pre>
    </div>
    <br />
    <p>To test this API, you'll need <a href="https://insomnia.rest/" rel="nofollow">Insomnia REST</a>, or similar.
      Then, create routes:</p>
    <ul>
      <li>
        <p><code>GET /search</code>: Route that returns results based on a search text. The route must receive <code>topic</code> and <code>page</code> inside the query params;</p>
      </li>
      <li>
        <p><code>GET /repo</code>: Route that returns the information from a repository. The route must receive <code>repoName</code> inside the query params;</p>
      </li>
      <li>
        <p><code>GET /user</code>: Route that returns other repositories by the same author. The route could receive
          <code>username</code> and <code>page</code> inside the query params;</p>
      </li>
    </ul>
    <hr>
    <p>Made with ♥ by Gisele Silva :wave: <a href="https://www.linkedin.com/in/gisabernardess/" rel="nofollow">Get in touch!</a></p>
  </article>
</div>
