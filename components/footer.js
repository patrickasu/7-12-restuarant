import React from 'react';

const Footer = () => (
	<footer>
		<div className="footer-section">
			<div className="footer-col">
				<h1>CONTACT INFO</h1>
				<p>Bovibe Villa N0. 25 Cooperative <br/> Villa Estate Badore Ajah, Lagos</p>
				<p>Call us +2348158380362</p>
				<p>7/12restuarant@gmail.com</p>
			</div>
			<div className="footer-col">
				<h1>OPENING HOURS</h1>
				<p>Monday - Thursday</p>
				<p>9:00 am - 12:00 pm</p>
				<p>+Friday - Sunday</p>
				<p>9:00 am - 12:00 pm</p>
			</div>
			<div className="footer-col">
				<h1>FOLLOW US</h1>
				<i class="fab fa-facebook-square"></i><br/>
				<i class="fab fa-instagram"></i><br/>
				<i class="fab fa-twitter"></i><br/>
			</div>
			<div className="footer-col">
				<h1>NEWSLETTER</h1>
				<input placeholder="enter your email" type="email" className="footer-email" /><br/>
				<a href="/" className="subscribetion-btn">SUBSCRIBE</a>
			</div>
		</div>
		<div className="copyright">
			<p>&copy; Copyright 7/12 Restuarant Develop by Bovibe Communication Service</p>
		</div>
	</footer>
);

export default Footer;