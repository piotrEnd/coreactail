import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default class DrinkSearch extends Component {
	render() {
		const { value, handleChange, handleSubmit, placeholder } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-4 mt-2 text-center">
						<form className="mb-5 outline" onSubmit={handleSubmit}>
							<div className="input-group">
								<input
									type="text"
									name="search"
									className="form-control"
									placeholder={placeholder}
									value={value}
									onChange={handleChange}
								/>
								<div className="input-group-append">
									<button
										type="submit"
										className="input-group-text "
										variant="outline-dark"
									>
										<IoIosSearch />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
