import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './style/mystyle.css';
import Slideshow from './components/slider';
import Home from './components/home';
import EventsContainer from './components/eventsContainer';
import Aboutus from './components/aboutus';
import Footer from './components/footer';
import Foodtable from './components/foodtable';
import Booking from './components/booking';
import Contact from './components/contact';
import Boot from './components/boot';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" render={()=> <Navbar name="7/12 RESTAURANT" />}/>
          <Slideshow />
          <Route exact path="/" render={()=> <Home title="FOUR SQUARE RESTAURANT" />}/>
          <Route path="/booking" render={()=> <Booking />}/>
          <Route path="/contact" render={()=> <Contact />}/>
          <Route path="/events" render={()=> <EventsContainer />}/> 
          <Route path="/aboutus" render={()=> <Aboutus />}/>
          <Route path="/foodtable" render={()=> <Foodtable />}/>
          <Route path="/boot" render={()=> <Boot />}/>  
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
