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
					<CarsSearch data={CarsDatabase.default.sort((a,b) =>
					{
						return this.tierToNumber(a.tier) < this.tierToNumber(b.tier) ? 1 : 
							this.tierToNumber(a.tier) > this.tierToNumber(b.tier) ? -1 : 0;
					})}/>
				</Container>
				<Footer />
			</Fragment>
		);
	}

	tierToNumber(tier)
	{
		switch(tier)
		{
		case 'Top':
			return 3;
		case 'Mid':
			return 2;
		default:
		case 'Standard':
			return 1;
		}
	}
}
