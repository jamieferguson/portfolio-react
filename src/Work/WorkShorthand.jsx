import React from 'react';
import { Link, Route } from 'react-router-dom';
import BodyClassName from 'react-body-classname';

import Page from '../Components/Page';
import Footer from '../Components/Footer';

const ScrollToTop = () => {
	window.scrollTo(0, 0);
	return null;
};

const WorkShorthand = () => (
	<BodyClassName className="shorthand">
		<Page>
			<Route component={ScrollToTop} />
			<main className="work shorthand">
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
					<header className="sub">
						<div className="centered">
							<h1>Shorthand</h1>
							<h2>
								Product &amp; UX Design <span>/ 2014-19</span>
							</h2>
						</div>
						<div className="background-wrapper">
							<div className="background-image" />
						</div>
					</header>
					<section id="intro">
						<p>Shorthand is a Brisbane based start-up who developed webapps allowing writers and designers to easily create stunning editorial features with zero development.</p>
						<p>
							In my role as 'Project Designer' I was design lead for all client projects. I would be involved from initial pitch stage, then developing the 'theme' as well as wireframing and designing any custom features
							as required.
						</p>
						<p>I also worked as part of the product team on developing new features and improvements based on clients needs, as well as the sales team in advising clients about design and development.</p>
						<p>Everything I designed was fully-responsive and almost entirely designed 'in the browser'.</p>
					</section>
					<section className="example screens">
						<h5>Shorthand Homepage</h5>
						<img src={require('../Media/work-shorthand-01.jpg')} alt="Shorthand Homepage" />
						<p>The Shorthand website is the main marketing tool for the product. I designed and developed it, as well as had input on the content.</p>
						<a className="btn" href="http://www.shorthand.com" target="_blank" rel="noopener noreferrer">
							View Live
						</a>
					</section>
					<section className="example grid">
						<h5>Shorthand Themes</h5>
						<ul>
							<li>
								<a href="http://loveandsorrow.com/">
									<div className="overlay">
										<span>Museum of Victoria</span>
										<div className="btn" href="http://loveandsorrow.com/" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-mv.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://projects.artgallery.nsw.gov.au/afghanistan/">
									<div className="overlay">
										<span>AGNSW</span>
										<div className="btn" href="http://projects.artgallery.nsw.gov.au/afghanistan/" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-agnsw.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://media.theaustralian.com.au/poweringaustralia/robotics/index.html">
									<div className="overlay">
										<span>The Australian</span>
										<div className="btn" href="http://media.theaustralian.com.au/poweringaustralia/robotics/index.html" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-aus.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://review.espn.co.uk/football/index.html">
									<div className="overlay">
										<span>ESPN - Best of 2013</span>
										<div className="btn" href="http://review.espn.co.uk/football/index.html" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-espn.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://vivid-festival.theguardian.com/">
									<div className="overlay">
										<span>The Guardian - Vivid</span>
										<div className="btn" href="http://vivid-festival.theguardian.com/" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-vivid.jpg')} alt="" />
								</a>
							</li>
							<li>
								<a href="http://theguide.fourfourtwo.com/en/brazil/index.html">
									<div className="overlay">
										<span>FourFourTwo - World Cup</span>
										<div className="btn" href="http://theguide.fourfourtwo.com/en/brazil/index.html" target="_blank" rel="noopener noreferrer">
											View Live
										</div>
									</div>
									<img src={require('../Media/story-442-brazil.jpg')} alt="" />
								</a>
							</li>
						</ul>
						<p>A selection of stories using different client themes that I designed & developed as Project Designer.</p>
					</section>
				</div>
				<Footer />
			</main>
		</Page>
	</BodyClassName>
);

export default WorkShorthand;
