import React, { Component } from 'react';
import { FaRegHeart, FaRegStickyNote } from 'react-icons/fa';
import '../styles/Footer.scss';

export default class Footer extends Component 
{
	render() 
	{
		return (
			<footer className="footer">
				<p>
          Made with <FaRegHeart /> by <a href="https://github.com/MrBartusek">MrBartusek</a> |
          Data <FaRegStickyNote /> by <a href="https://www.reddit.com/r/gtaonline/comments/5ivw7o/list_of_all_cargo_vehicles/">u/ErregungHaus</a></p>
			</footer>
		);
	}
}
