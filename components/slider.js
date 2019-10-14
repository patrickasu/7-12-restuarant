import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Slidershow = () => {
	return (
		<div className="main-content">
			<div className="img-area">
				<div className="image-slideshow">
					<Slider
		                dots={false}
		                autoplayspeed={7000}
		                arrows={true}
		                fade={true}
		                speed={2000}
		                infinite={true}
		                cssEase={'ease-in-out'}
		                loop={true}
		                autoplay={true}
						>
						<div className="slide-img">
		                  <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>7/12 Restaurant</h2>
			                 <span><p>-------- HOME OF THE BEST LOCAL AND FOREIGN FOOD --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">BOOK TABLE</button></Link>
			                </div>  
		                </div>
		                <div className="slide-img">
		                  <img src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>7/12 Restaurant</h2>
			                 <span><p>-------- HOME OF THE BEST LOCAL AND FOREIGN FOOD --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">BOOK TABLE</button></Link>
			                </div>  
		                </div>
		                <div className="slide-img">
		                  <img src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>7/12 Restaurant</h2>
			                 <span><p>-------- HOME OF THE BEST LOCAL AND FOREIGN FOOD --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">BOOK TABLE</button></Link>
			                </div>  
		                </div>
		                
	                </Slider>
				</div>
			</div>
		</div>	
	);
}

export default Slidershow;