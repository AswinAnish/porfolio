import React, { useState } from 'react';

export default function Contact() {
  const [githubHovered, setGithubHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  const githubLinkStyle = {
    textDecoration: 'none',
    color: githubHovered ? '#ff0000' : 'rgba(0, 0, 0)', // Red on hover, Black by default
    fontSize: '2rem',
    opacity: 0.6,
  };

  const twitterLinkStyle = {
    textDecoration: 'none',
    color: twitterHovered ? '#ff0000' : 'rgba(0, 0, 0)', // Red on hover, Black by default
    fontSize: '2rem',
    opacity: 0.6,
  };

  const linkedinLinkStyle = {
    textDecoration: 'none',
    color: linkedinHovered ? '#ff0000' : 'rgba(0, 0, 0)', // Red on hover, Black by default
    fontSize: '2rem',
    opacity: 0.6,
  };

  return (
    <><h3>
      <div style={{ margin: '10px 0' }}>
        <span>
          <a
            href="https://github.com/AswinAnish"
            style={githubLinkStyle}
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
          >
            Github
          </a>
          <br />
        </span>
        <span>
          <a
            href="https://twitter.com/AswinAnish1"
            style={twitterLinkStyle}
            onMouseEnter={() => setTwitterHovered(true)}
            onMouseLeave={() => setTwitterHovered(false)}
          >
            X
          </a>
          <br />
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/aswin-anish-3726431b4/"
            style={linkedinLinkStyle}
            onMouseEnter={() => setLinkedinHovered(true)}
            onMouseLeave={() => setLinkedinHovered(false)}
          >
            LinkedIn
          </a>
          <br />
        </span>
      </div>
    </h3>
    <h4 className='ojuju'>👋 </h4>
    </>
  );
}
