import React from 'react';
import { Link, Route } from 'react-router-dom';
import Page from '../Components/Page';

// const ScrollToTop = () => {
// 	window.scrollTo(0, 0);
// 	return null;
// };

function WorkTGM() {
	return (
		<Page>
			<div className="work tgm">
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
							<h1>The Global Mail</h1>
							<h2>
								Data Vis & Editorial Design <span>/ 2012</span>
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
					<section className="example grid">
						<h5>Other Projects (that are still live!)</h5>
						<ul>
							<li>
								<a href="http://pharma.theglobalmail.org/" target="_blank" rel="noopener noreferrer">
									<div className="overlay">
										<span>The Great Pill Pu$h</span>
										<div className="btn" href="http://pharma.theglobalmail.org/" target="_blank">
											View Live
										</div>
									</div>
									<img src={require('../Media/work-tgm-pharma.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://bulga.theglobalmail.org/" target="_blank" rel="noopener noreferrer">
									<div className="overlay">
										<span>The Town That Wouldn’t Disappear</span>
										<div className="btn" href="http://bulga.theglobalmail.org/" target="_blank">
											View Live
										</div>
									</div>
									<img src={require('../Media/work-tgm-bulga.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://rockart.theglobalmail.org/" target="_blank" rel="noopener noreferrer">
									<div className="overlay">
										<span>Rock Art At Risk</span>
										<div className="btn" href="http://rockart.theglobalmail.org/" target="_blank">
											View Live
										</div>
									</div>
									<img src={require('../Media/work-tgm-rockart.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://dementia.theglobalmail.org/" target="_blank" rel="noopener noreferrer">
									<div className="overlay">
										<span>Hearts And Minds: A Personal Look At Dementia</span>
										<div className="btn" href="http://dementia.theglobalmail.org/" target="_blank">
											View Live
										</div>
									</div>
									<img src={require('../Media/work-tgm-alz.jpg')} alt="" />
								</a>
							</li>
						</ul>
						<p>Unfortunately these are the only projects that are still live from my time at The Global Mail.</p>
					</section>
				</div>
			</div>
		</Page>
	);
}

export default WorkTGM;
