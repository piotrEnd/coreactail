import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Day from './pages/Day';
import Name from './pages/Name';
import Ingredient from './pages/Ingredient';
import Default from './pages/Default';
import Navbar from './components/Navbar';

export default class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar />
				<main>
					<Switch>
						<Route path="/" exact component={Day} />
						<Route path="/name" component={Name} />
						<Route path="/ingredient" component={Ingredient} />
						<Route component={Default} />
					</Switch>
				</main>
			</Router>
		);
	}
}
