import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class CarCard extends Component 
{
	render() 
	{
		return (
			<Card>
				<Card.Img variant="top" src={this.props.image} onError={this.addDefaultSrc} alt={this.props.name} />
				<Card.Body>
					<Card.Title>{this.props.name}</Card.Title>
					<Card.Text>
						<p><strong>Plate:</strong> {this.props.plate}</p>
						<p><strong>Range:</strong> {this.stringifyTier(this.props.tier)}</p>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className='text-muted'>{this.props.collection ? this.props.collection : 'None'}</small>
				</Card.Footer>
			</Card>
		);
	}

	stringifyTier(tier)
	{
		if(tier === 0)
		{
			return 'Standard';
		}
		else if(tier === 1)
		{
			return 'Mid';
		}
		else if(tier === 2)
		{
			return 'Top';
		}
	}

	addDefaultSrc(img)
	{
		if(!img.target.src.includes('default.jpg'))
		{
			img.target.src = process.env.PUBLIC_URL + '/default.jpg';
		}
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
