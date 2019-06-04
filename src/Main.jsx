import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './Home';
import WorkShorthand from './Work/WorkShorthand';
import WorkViator from './Work/WorkViator';
import WorkTGM from './Work/WorkTGM';
import WorkAus from './Work/WorkAus';

function Main({ location }) {
	return (
		<main>
			<TransitionGroup>
				<CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/work-shorthand" component={WorkShorthand} />
						<Route path="/work-viator" component={WorkViator} />
						<Route path="/work-tgm" component={WorkTGM} />
						<Route path="/work-aus" component={WorkAus} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</main>
	);
}

export default withRouter(Main);
