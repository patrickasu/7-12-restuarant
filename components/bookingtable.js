import React from 'react';
import { Link } from 'react-router-dom';

const Bookingtable = () => (
	<div className="bookingtable-section">
		<h1 className="booking-h1">Reservation</h1>
		<h2 booking-h2>BOOKING TABLE</h2>
		<div className="booking-table-row">
			<div className="booking-elements">
				<span className="booking-icon">
					<i class="far fa-calendar-alt"></i>
				</span>
				<span className="booking-data">
					15/09/2019
				</span>
			</div>
			<div className="booking-elements">
				<span className="booking-icon">
					<i class="far fa-clock"></i>
				</span>
				<span className="booking-data">
					9:00 PM 
				</span>
			</div>
			<div className="booking-elements">
				<span className="booking-icon">
					<i class="fas fa-user-friends"></i>
				</span>
				<span className="booking-data">
					Table for 2
				</span>
			</div>
			<div className="mybooking-elements">
				<Link to="/booking" className="mybooking-mybtn">BOOK A TABLE</Link>
			</div>
		</div>
	</div>
);

export default Bookingtable;
