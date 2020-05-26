import React, { Fragment } from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import CarsDeck from './CarsDeck';
import * as CarsDatabase from '../database.json';

export default class App extends React.Component 
{
	render() 
	{
		return (
			<Fragment>
				<Header />
				<Container>
					<CarsDeck data={CarsDatabase}/>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}
