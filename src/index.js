import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import Main from './Main';
import Footer from './Components/Footer';

import * as serviceWorker from './serviceWorker';

const ScrollToTop = () => {
	window.scrollTo(0, 0);
	return null;
};

ReactDOM.render(
	<BrowserRouter>
		<Route component={ScrollToTop} /> <Nav />
		<Main />
		<Footer />
	</BrowserRouter>,
	document.getElementById('portfolio')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
