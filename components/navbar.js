import React from 'react';
import { NavLink } from 'react-router-dom';
import Restaurant from '../mylogo.png';

const Navbar = (props) => (
	<nav>
		<img className="navigation-logo" src={Restaurant} alt="7/12 logo" /><h3 className="header-name">7/12 RESTAURANT</h3>
		<ul className="navigation-menu">
			<li><NavLink className="navigation-link" exact to="/">Home</NavLink></li>
			<li><NavLink className="navigation-link" to="/booking">Reservation</NavLink></li>
			<li><NavLink className="navigation-link" to="/order">Order</NavLink></li>
			<li><NavLink className="navigation-link" to="/events">Events</NavLink></li>
			<li><NavLink className="navigation-link" to="/contact">Contact us</NavLink></li>
		</ul>
	</nav>
);

export default Navbar;