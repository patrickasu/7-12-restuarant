import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => (
	<div className="main-content">
		<div className="container">
			<div className="discover-section">
				<div className="discover-section-image-1">
					<Link to="/aboutus"><div className="discover-section-overlay">
						<h2>Discover</h2>
						<h3>OUR STORY</h3>
						<p>Best Local and Foreign Dishes with a great dinning experience. Four Square Restaurant is a world class modern African brand.</p>
						<Link to="/aboutus" className="discover-btn"><span>ABOUT US</span><span>ABOUT US</span></Link>
					</div></Link>
				</div>
				<div className="discover-section-image-2"></div>
				<div className="discover-section-image-3"></div>
			</div>
		</div>
	</div>
);

export default Discover;
