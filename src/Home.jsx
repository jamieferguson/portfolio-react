import React from 'react';
import WorkList from './Components/WorkList';

import BodyClassName from 'react-body-classname';

const Home = () => (
	<BodyClassName className="home">
		<div>
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
		</div>
	</BodyClassName>
);

export default Home;
