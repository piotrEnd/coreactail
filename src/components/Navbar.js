import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light  ">
			<div className="collapse navbar-collapse show ml-sm-5 d-flex justify-content-center">
				<ul className="navbar-nav">
					<li className="nav-item active ">
						<Link className="nav-link" to="/">
							Drink of the Day
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/name">
							Search for Cocktails
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/ingredient">
							Ingredient Dictionary
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
