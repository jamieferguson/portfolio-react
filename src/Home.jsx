import React from 'react';

import Nav from './Components/Nav';
import WorkList from './Components/WorkList';
import Page from './Components/Page';
import Footer from './Components/Footer';

const Home = () => (
	<Page>
		<div className="home">
			<Nav />
			<header>
				<div className="centered">
					<h1>Jamie Ferguson</h1>
					<h2>
						Product & Interaction Designer <span className="location">/ Sydney, Australia</span>
					</h2>
				</div>
			</header>
			<section id="work">
				<h5>My work</h5>
				<WorkList />
			</section>
			<Footer />
		</div>
	</Page>
);

export default Home;
