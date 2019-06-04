import React from 'react';
import { Link } from 'react-router-dom';

function WorkList() {
	return (
		<ul>
			<li>
				<Link to="work-shorthand" className="shorthand">
					<div className="image" />
					<div className="text">
						<h3>Shorthand</h3>
						<h4>Editorial & UX Design</h4>
						<div className="date">2014-19</div>
					</div>
				</Link>
			</li>
			<li>
				<Link to="work-viator" className="viator">
					<div className="image" />
					<div className="text">
						<h3>Viator</h3>
						<h4>UX Design</h4>
						<div className="date">2013</div>
					</div>
				</Link>
			</li>
			<li>
				<Link to="work-tgm" className="tgm">
					<div className="image" />
					<div className="text">
						<h3>The Global Mail</h3>
						<h4>Data Vis & Editorial Design</h4>
						<div className="date">2012</div>
					</div>
				</Link>
			</li>
			<li>
				<Link to="work-aus" className="aus">
					<div className="image" />
					<div className="text">
						<h3>The Australian</h3>
						<h4>Editorial & UX Design</h4>
						<div className="date">2011</div>
					</div>
				</Link>
			</li>
		</ul>
	);
}

export default WorkList;
