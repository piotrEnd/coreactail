import React, { Component } from 'react';

import Heading from '../components/Heading';
import DrinkSearch from '../components/DrinkSearch';
import Drink from '../components/Drink';
import Missing from '../components/Missing';

export default class Name extends Component {
	state = {
		drinks: [],
		search: '',
		base_url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`,
		url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`,
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
			if (data.drinks === null) {
				this.setState(() => {
					return {
						missing: true
					};
				});
			} else {
				this.setState({
					drinks: data.drinks,
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
				<Heading title="search cocktails by" bold="name" />
				<DrinkSearch
					value={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					placeholder={'e.g. mojito, caipirnha, mai tai?'}
				/>
				{this.state.missing ? <Missing /> : <Drink details={this.state.drinks} />}
			</>
		);
	}
}
