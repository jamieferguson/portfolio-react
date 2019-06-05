import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Components/Page';

// const ScrollToTop = () => {
// 	window.scrollTo(0, 0);
// 	return null;
// };

function WorkAus() {
	return (
		<Page>
			<div className="work aus">
				{/* <Route component={ScrollToTop} /> */}
				<nav className="work-nav">
					<Link
						className="btn"
						to={{
							pathname: '/',
							state: { prev: false }
						}}
					>
						Home
					</Link>
				</nav>
				<div className="work-container">
					<header className="sub ">
						<div className="centered">
							<h1>The Australian</h1>
							<h2>
								Editorial & Interaction Design <span>/ 2011</span>
							</h2>
						</div>
						<div className="background-wrapper">
							<div className="background-image" />
						</div>
					</header>
					<section id="intro">
						<p>The Global Mail was a short-lived, not-for-profit news organisation that focussed on long-form storytelling & data-driven journalism.</p>
						<p>
							My role was to lead the design of editorial & data-visualisation projects. As part of a small team I was involved in all aspects of the project - from research, concepts & UX, through to cleaning data -
							working closely with both developers & editorial staff.
						</p>
						<p>As The Global Mail ceased operations some time ago only a few of these projects remain online. I have linked to them where possible.</p>
					</section>
					<section className="example grid">
						<h5>Behind The Wire</h5>
						<ul>
							<li>
								<img src={require('../Media/work-tgm-wire-01.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-03.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-02.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-04.jpg')} alt="" />
							</li>
						</ul>
						<ul className="quarter">
							<li>
								<img src={require('../Media/work-tgm-wire-mob-01.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-mob-03.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-mob-02.jpg')} alt="" />
							</li>
							<li>
								<img src={require('../Media/work-tgm-wire-mob-04.jpg')} alt="" />
							</li>
						</ul>
						<p>
							'Behind The Wire' used data about incidents in detention gathered via FOI requests & aimed to present them in a meaningful way. Each square represents one incident. A user can easily sort or browse the
							incidents as well as learn more by pressing each 'square'. Rather than try to present the data with any bias we created a way for users to tell us what they thought was the most important. To do this they
							could 'flag' an incident, which would increase the brightness of that incident on the grid.
						</p>
					</section>
				</div>
			</div>
		</Page>
	);
}

export default WorkAus;
