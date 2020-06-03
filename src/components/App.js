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
					<main>
						<CarsSearch data={CarsDatabase.default.sort((a,b) =>
						{
							return a.tier < b.tier ? 1 : a.tier > b.tier ? -1 : 0;
						})}/>
					</main>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}
