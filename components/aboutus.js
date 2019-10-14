import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => (
	<div className="main-content">
		<div className="container">
			<div className="speciality-section">
				<div className="speciality-image-1"></div>
				<div className="speciality-message">
					<i class="fas fa-coffee"></i>
					<h2>About Us</h2>
					<h3>Four Square Restuarant</h3>
					<p className="about-us-description">Four Square Restuarant is a leading quick service restaurant, Outdoor Caterers, Event Hall Managers and Home delivery hospitality outfit. Our sumptuous meals are produced under a very stringent hygienic environment with our branches located with beautiful ambience for family and friends.</p>
					<Link to="/foodtable"><button className="speciality-message-btn">VIEW MENU</button></Link>
				</div>
				<div className="speciality-image-2"></div>
			</div>
			<div className="about-us-description">
				<p>Four Square Restuarant is a leading quick service restaurant, Outdoor Caterers, Event Hall Managers and Home delivery hospitality outfit. Our sumptuous meals are produced under a very stringent hygienic environment with our branches located strategically with beautiful ambience for family and friends.Our event halls comes with ultra modern and vintage interior finishing to give guests a memorable experience. Four Square Restuarant operates in these 5 units to cater for different customer experience;<br/> Quick Service Restaurant (Fast Food Services).<br/> Tastee Pot (Outdoor Catering). <br/> Tastee Event (Hall Rentals).<br/> Tastee2U (Food Delivery Service). <br/> Bunma Bakery (Bread and Cake Production). The birth of De-Four Square RestuarantLimited is a translation of an idea conceived by an industrious woman, Mrs. Olayinka Pamela Adedayo, which to the glory of God has transformed into a big organization and a great fortune not only for the owners, but also to thousand of families across Nigeria and the larger society as a whole. In the quest to actualize the idea, she established Tastee Pot in 1989 to render outdoor catering services to distinguished and discerning clientele across Nigeria. <br/> The advent of the eatery with new concept of service, qualitative products, and exquisite ambience, became a reference point, but nonetheless, the company still up till today maintains an unusual standard of the concept of service. Four Square Restuarantwhich is undisputably highly reputed in Nigeria for quality fast food service has at present fourteen outlets, in metropolitan parts of Lagos, where an array of delicious meals and snacks are offered to delight the populace. Our success over the years is attributable to our highly skilled labour, use of qualitative inputs, and combination of environmental friendly production technologies. <br/> Tastee Pot has over the years become the outdoor caterer of first choice, serving so many reputable individuals and organizations. The desire of Mrs. Olayinka Adedayo to meet the yearnings of Nigerians, especially Lagosians for qualitative fast food service, considering her experience in Kentucky Fried Chicken, where she worked between 1978 and 1980 as a Manager, led to the diversification into fast food service with the establishment of De Four Square RestuarantLtd in 1996. The coming on stream of Four Square Restuarantundoubtedly revolutionized the concept of fast food service in Nigeria.</p>
			</div>
		</div>
	</div>
);

export default Aboutus;
