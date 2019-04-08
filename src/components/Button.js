import React from 'react';
import Button from 'react-bootstrap/Button';

const NextButton = (props) => {
	return (
		<div style={{ textAlign: 'center' }} className="p-2">
			<Button onClick={props.random} variant="outline-dark" size="lg">
				<div className="px-4 py-1" style={{ width: '18rem' }}>..and on the next day</div>
			</Button>
		</div>
	);
};

export default NextButton;
