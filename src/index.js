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

const Portfolio = () => (
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
									enter: 150,
									exit: 150
								}}
							>
								<Route
									location={location}
									render={() => (
										<Switch>
											<Route exact path="/" component={Home} />
											<Route path="/shorthand" component={WorkShorthand} />
											<Route path="/viator" component={WorkViator} />
											<Route path="/the-global-mail" component={WorkTGM} />
											<Route path="/the-australian" component={WorkAus} />
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
