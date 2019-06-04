import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul>
				<li className="nav-home">
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="mailto:jamie@jferguson.me">Contact</a>
				</li>
				<li>
					<a href="http://au.linkedin.com/in/jsferguson" target="_blank" rel="noopener noreferrer">
						Linkedin
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
