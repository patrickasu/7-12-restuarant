import React from 'react';
import { Link } from 'react-router-dom';

const Catering = () => (
	<div className="main-content">
		<div className="catering-section">
			<div className="catering-image-1"></div>
			<div className="catering-description">
				<h1>For Your Special Day</h1>
				<h2>CATERING SERVICES</h2>
				<p>We love food, lots of different food, just like you. We promise an intimate and relaxed dinning experience that offers different from local to foreign patrons.</p>
				<Link to="/foodtable" className="view-btn"><span>VIEW MENU</span><span>VIEW MENU</span></Link>
			</div>
			</div>
	</div>
);

export default Catering;