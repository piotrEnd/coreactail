import React, { Component } from 'react';

import Drink from '../components/Drink';
import NextButton from '../components/Button';
import Heading from '../components/Heading';

export default class Day extends Component {
	state = {
		drinks: [],
		url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	};

	async getDrinks() {
		try {
			const apiData = await fetch(this.state.url);
			const data = await apiData.json();

			this.setState({
				drinks: data.drinks
			});
		} catch (error) {
			console.log(error);
		}
	}

	componentDidMount() {
		this.getDrinks();
	}

	changeRandom = () => {
		this.getDrinks();
	};

	render() {
		return (
			<>
				<Heading title="Drink of the" bold="day" />
				<Drink details={this.state.drinks} />
				<NextButton random={this.changeRandom} />
			</>
		);
	}
}
