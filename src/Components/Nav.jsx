import React from "react";

function Nav() {
  return (
    <nav aria-label="Contact links" className="main-nav">
      <ul>
        <li>
          <a href="mailto:jamie@jferguson.me">Contact</a>
        </li>
        <li>
          <a
            href="http://au.linkedin.com/in/jsferguson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
