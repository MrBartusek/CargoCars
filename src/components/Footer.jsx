import React, { Component } from 'react';
import { FaRegHeart, FaRegStickyNote } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import '../styles/Footer.scss';

export default class Footer extends Component 
{
	render() 
	{
		return (
			<footer className="footer">
				<p>
					Made with <FaRegHeart /> by <a href="https://github.com/MrBartusek" target='_blank' rel="noopener noreferrer">MrBartusek</a> |
					Data <FaRegStickyNote /> by <a href="https://www.reddit.com/r/gtaonline/comments/5ivw7o/list_of_all_cargo_vehicles/" target='_blank' rel="noopener noreferrer">u/ErregungHaus</a> |
					Icons <FiStar /> by <a href="https://fontawesome.com" target='_blank' rel="noopener noreferrer">Font Awesome</a> under <a href="https://creativecommons.org/licenses/by/4.0/" target='_blank' rel="noopener noreferrer">CC BY 4.0</a>
				</p>
			</footer>
		);
	}
}
