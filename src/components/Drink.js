import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default class Drink extends Component {
	render() {
		const { details } = this.props;

		const singleDrink = details.map((drink) => {
			let num = 1;
			let ingredientArray = [];
			while (drink[`strIngredient${num}`]) {
				// matching ingredient with measurement
				ingredientArray.push({
					name: drink[`strIngredient${num}`],
					amount: drink[`strMeasure${num}`]
				});
				num++;
			}

			return (
				<div className="col-sm my-3" key={drink.idDrink}>
					<Card style={{ width: '20rem' }} className="mx-auto">
						<Card.Img variant="top" src={drink.strDrinkThumb} />
						<Card.Body>
							<Card.Title className="text-secondary">{drink.strDrink}</Card.Title>
							<Card.Text>{drink.strInstructions}</Card.Text>
						</Card.Body>
						<Table hover>
							<thead>
								<tr className="text-secondary">
									<th>#measure</th>
									<th>ingredient</th>
								</tr>
							</thead>
							<tbody>
								{ingredientArray.map((ingredient, index) => (
									<tr key={index}>
										<td>{ingredient.amount.toLowerCase()}</td>
										<td>{ingredient.name.toLowerCase()}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="d-flex justify-content-center">
					<div className="row ">{singleDrink}</div>
				</div>
			</div>
		);
	}
}


