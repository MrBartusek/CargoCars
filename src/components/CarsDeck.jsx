import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'react-bootstrap';
import CarCard from './CarCard';
import '../styles/CarsDeck.scss';
export default class CarsDeck extends Component 
{
	render() 
	{
		return (
			<CardDeck className='cars-deck'>
				{this.props.data.default.map((car, i) =>  
					<CarCard key={i} name={car.name} plate={car.plate} tier={car.tier} image={'/car-img/' + car.plate + '.jpg'} collection={car.collection} /> 
				)}
			</CardDeck>
		);
	}
	
	static get propTypes()
	{
		return {
			data: PropTypes.array
		};
	}
}
