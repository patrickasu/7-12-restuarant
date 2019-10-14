import React from 'react';

const Gallery = () => (
	<div className="main-content">
		<div className="special-menu">
			<h2>ToDay</h2>
			<h3>SPECIAL MENU</h3>
			<div className="special-menu-container">
				<div className="special-menu-col">
					<div className="col-small">
						<div className="col-small-1">
							<i class="fas fa-wine-bottle"></i>
								<h4>DRINKS</h4>
								<span className="seperator-orange"></span>
								<span className="gallary-price">FROM ₦500</span>
						</div>
					</div>
					<div className="col-small-2"></div> 
					<div className="col-small-3"></div>
					<div className="col-small">
						<div className="col-small-1">
							<i class="fas fa-mug-hot"></i> 
							<h4>Lunch</h4>
							<span className="seperator-orange"></span>
							<span className="gallary-price">FROM ₦1700</span>
						</div>
					</div>   
				</div>
				<div className="special-menu-col">
					<div className="col-small">
						<div className="col-small-1">
							<i class="fas fa-drumstick-bite"></i>
								<h4>Chicken</h4>
								<span className="seperator-orange"></span>
								<span className="gallary-price">FROM ₦2800</span>
						</div>
					</div>
					<div className="col-small-5"></div> 
					<div className="col-small-4"></div>
					<div className="col-small">
						<div className="col-small-1">
							<i class="fas fa-utensils"></i> 
							<h4>Dinner</h4>
							<span className="seperator-orange"></span>
							<span className="gallary-price">FROM ₦1800</span>
						</div>
					</div>   
				</div>
			</div>
		</div>
	</div>
);

export default Gallery;