import React from "react";

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="mailto:jamie@jferguson.me" tabindex="0">
            Contact
          </a>
        </li>
        <li>
          <a
            href="http://au.linkedin.com/in/jsferguson"
            target="_blank"
            rel="noopener noreferrer"
            tabindex="0"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
