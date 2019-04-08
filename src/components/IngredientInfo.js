import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class IngredientInfo extends Component {
	render() {
		const { ingredients } = this.props;

		const ingredientInfo = ingredients.map((drink) => {
			return (
				<div className="col-sm my-3" key={drink.idIngredient}>
					<Card>
						<Card.Header>{drink.strIngredient}</Card.Header>

						<Card.Body>
							<Card.Text>
								{drink.strDescription ? (
									drink.strDescription
								) : (
									'..no additional information has been provided'
								)}
							</Card.Text>
							<Card.Img
								className="d-flex mx-auto p-4 w-50"
								src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient}.png`}
							/>
						</Card.Body>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="d-flex justify-content-center">
					<div className="row ">{ingredientInfo}</div>
				</div>
			</div>
		);
	}
}
