import React from 'react';
import { render } from 'react-dom';

import './Styles/index.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './Home';
import WorkShorthand from './Work/WorkShorthand';
import WorkViator from './Work/WorkViator';
import WorkTGM from './Work/WorkTGM';
import WorkAus from './Work/WorkAus';

const supportsHistory = 'pushState' in window.history;

const Portfolio = ({}) => (
	<BrowserRouter forceRefresh={!supportsHistory}>
		<main>
			<Route
				render={({ location }) => {
					const { pathname } = location;
					return (
						<TransitionGroup>
							<CSSTransition
								key={pathname}
								classNames={'page'}
								timeout={{
									enter: 250,
									exit: 250
								}}
							>
								<Route
									location={location}
									render={() => (
										<Switch>
											<Route exact path="/" component={Home} />
											<Route path="/work-shorthand" component={WorkShorthand} />
											<Route path="/work-viator" component={WorkViator} />
											<Route path="/work-tgm" component={WorkTGM} />
											<Route path="/work-aus" component={WorkAus} />
										</Switch>
									)}
								/>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
		</main>
	</BrowserRouter>
);

render(<Portfolio />, document.getElementById('portfolio'));
