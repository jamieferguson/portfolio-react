import React from 'react';
import { Link } from 'react-router-dom';

function WorkList() {
	return (
		<ul>
			<li className="shorthand">
				<Link
					to={{
						pathname: '/shorthand',
						state: { prev: true }
					}}
				>
					<div className="text">
						<h3>Shorthand</h3>
						<h4>Editorial & UX Design</h4>
						<div className="date">2014-19</div>
					</div>
					<div className="background-overlay" />
				</Link>
			</li>
			<li className="viator">
				<Link
					to={{
						pathname: '/viator',
						state: { prev: true }
					}}
				>
					<div className="text">
						<h3>Viator</h3>
						<h4>UX Design</h4>
						<div className="date">2013</div>
					</div>
					<div className="background-overlay" />
				</Link>
			</li>
			<li className="tgm">
				<Link
					to={{
						pathname: '/the-global-mail',
						state: { prev: true }
					}}
				>
					<div className="text">
						<h3>The Global Mail</h3>
						<h4>Data Vis & Editorial Design</h4>
						<div className="date">2012</div>
					</div>
					<div className="background-overlay" />
				</Link>
			</li>
			<li className="aus">
				<Link
					to={{
						pathname: '/the-australian',
						state: { prev: true }
					}}
				>
					<div className="text">
						<h3>The Australian</h3>
						<h4>Editorial & UX Design</h4>
						<div className="date">2011</div>
					</div>
					<div className="background-overlay" />
				</Link>
			</li>
		</ul>
	);
}

export default WorkList;
