import React, { Component } from 'react';
import { FaRegHeart, FaRegStickyNote } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import '../styles/Footer.scss';

export default class Footer extends Component 
{
	render() 
	{
		return (
			<footer className="footer">
				<p>
					Made with <FaRegHeart /> by <a href="https://github.com/MrBartusek" target='_blank' rel="noopener noreferrer">MrBartusek</a> |
					Open Source <FiGithub /> on <a href="https://github.com/MrBartusek/CargoCars" target='_blank' rel="noopener noreferrer">Github</a> |
					Data <FaRegStickyNote /> by <a href="https://www.reddit.com/r/gtaonline/comments/5ivw7o/list_of_all_cargo_vehicles/" target='_blank' rel="noopener noreferrer">u/ErregungHaus</a>
				</p>
			</footer>
		);
	}
}
