import React, { Component, Fragment } from 'react';
import CarsDeck from './CarsDeck';
import SearchError from './SearchError';
import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default class CarsSearch extends Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {
			searchString: '',
			filtered: this.props.data
		};
		this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(e) 
	{
		const value = e.target.value;
		if(value === '')
		{
			this.setState({searchString: '', filtered: this.props.data});
		}
		this.setState({
			searchString: value,
			filtered: this.props.data.filter(x =>
				Object.values(x)
					.join(' ')
					.toLowerCase()
					.match(value.toLowerCase())
			)
		});
	}
  
	render() 
	{
		return (
			<Fragment>
				<InputGroup className='mb-3'>
					<FormControl type="text" placeholder="Search by name, plate, collection or range" className="py-2 border-right-0 border" value={this.state.searchString} onChange={this.handleChange}/>
					<InputGroup.Append>
						<InputGroup.Text className='bg-transparent'> <FaSearch /> </InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
				{this.renderSearchResult()}
			</Fragment>
		);
	}

	renderSearchResult()
	{
		const filtered = this.state.filtered;
		return filtered.length === 0 ? <SearchError /> : <CarsDeck data={filtered} />;
	}
	
	static get propTypes()
	{
		return {
			data: PropTypes.array
		};
	}
}