import React, { Component } from 'react';

import Heading from '../components/Heading';
import DrinkSearch from '../components/DrinkSearch';
import IngredientInfo from '../components/IngredientInfo';
import Missing from '../components/Missing';

export default class Ingredient extends Component {
	state = {
		ingredients: [],
		search: '',
		base_url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=`,
		url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=`,
		missing: false
	};

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { base_url, search } = this.state;

		this.setState({ url: `${base_url}${search}`, search: '' }, () => {
			this.getDrinks();
		});
	};

	async getDrinks() {
		try {
			const apiData = await fetch(this.state.url);
			const data = await apiData.json();
			if (data.ingredients === null) {
				this.setState(() => {
					return {
						missing: true
					};
				});
			} else {
				this.setState({
					ingredients: data.ingredients,
					missing: false
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				<Heading title="discover" bold="ingredients" />
				<DrinkSearch
					value={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					placeholder={'e.g. rum, lemon, vodka?'}
				/>
				{this.state.missing ? (
					<Missing />
				) : (
					<IngredientInfo ingredients={this.state.ingredients} />
				)}
			</>
		);
	}
}
