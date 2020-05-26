import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class CarCard extends Component 
{
	render() 
	{
		return (
			<Card>
				<Card.Img variant="top" src={this.props.image} onError={this.addDefaultSrc}/>
				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>
					<Card.Text>
						{this.props.tier} <br />
						{this.props.collection}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">{this.props.plate}</small>
				</Card.Footer>
			</Card>
		);
	}

	addDefaultSrc(img)
	{
		img.target.src = '/car-img/default.jpg';
	}

	static get propTypes()
	{
		return {
			name: PropTypes.string,
			plate: PropTypes.string,
			tier: PropTypes.string,
			image: PropTypes.string,
			collection: PropTypes.string,
		};
	}
}
