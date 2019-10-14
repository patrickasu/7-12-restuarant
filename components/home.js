import React from 'react';
import Discover from '../components/discover';
import Catering from '../components/catering';
import Delicacies from '../components/delicacies';
import Bookingtable from '../components/bookingtable';
import Gallery from '../components/gallery';
import Parallax from '../components/parallax';
import Contact from '../components/contact';


const Home = () => {
	return (
		<React.Fragment>
			<Discover />
			<Catering />
			<Delicacies />
			<Parallax />
			<Bookingtable/>
			<Gallery />
			<Contact />
		</React.Fragment>
	)
}

export default Home;