import React from 'react';

const Heading = ({ title, bold }) => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="text-center text-uppercase my-5">
							{title} <strong>{bold}</strong>
						</h2>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Heading;
