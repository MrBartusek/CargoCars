import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import CarsSearch from './CarsSearch';
import * as CarsDatabase from '../database.json';

export default class App extends React.Component 
{
	render() 
	{
		return (
			<Fragment>
				<Header />
				<Container>
					<CarsSearch data={CarsDatabase.default}/>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}
