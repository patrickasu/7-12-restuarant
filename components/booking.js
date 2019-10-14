import React, { Component } from 'react'
import axios from 'axios';

class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '', 
			lastname: '', 
			email: '',
			phonenumber: '', 
			typeoftable: '', 
			purpose: '', 
			mealplan: '', 
			time: '', 
			date: '',
		}	
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const booking = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			phonenumber: this.state.phonenumber,
			typeoftable: this.state.typeoftable,
			purpose: this.state.purpose,
			mealplan: this.state.mealplan,
			time: this.state.time,
			date: this.state.date
		}
		axios.post('/api/reservations', booking)
			.then(res => console.log(res.data));
			window.location = '/';
	}
	render() {
		return (
			<div className="main-content">
				<div className="booking-section">
				<form className="reservation-form" onSubmit={this.handleSubmit}>
					<h2 className="booking-header">TABLE RESERVATION</h2>
						<input className="text-box" type="text" id="firstname" placeholder="First Name" required onChange={this.handleChange}/>
						<input className="text-box" type="text" id="lastname" placeholder="Last Name" required onChange={this.handleChange}/>
						<input className="text-box" type="email" id="email" placeholder="Enter your Email" required onChange={this.handleChange}/>
						<input className="text-box" type="text" id="phonenumber" placeholder="Enter your Phone Number" required onChange={this.handleChange}/>
						<select className="text-box" id="typeoftable" onChange={this.handleChange} value={this.state.value}>
							<option value="typeoftable">Select Type of Table</option>
							<option value="tablefor2">Table for 2</option>
							<option value="tablefor3">Table for 3</option>
							<option value="tablefor4">Table for 4</option>
							<option value="tablefor5">Table for 5</option>
							<option value="tablefor6">Table for 6</option>
						</select>
						<select className="text-box" id="purpose" onChange={this.handleChange} value={this.state.value}>
							<option value="purpose" htmlFor="purpose" id="purpose" onChange={this.handleChange}>Select Purpose</option>
							<option value="casual" htmlFor="casual" id="casual" onChange={this.handleChange}>Casual</option>
							<option value="meeting" htmlFor="meeting" id="meeting" onChange={this.handleChange}>Meeting</option>
							<option value="celebration" htmlFor="celebration" id="celebration" onChange={this.handleChange}>Celebration</option>
						</select>
						<select className="text-box" id="mealplan" onChange={this.handleChange} value={this.state.value}>
							<option value="mealplan" htmlFor="mealplan" id="mealplan" onChange={this.handleChange}>Select Meal Plan</option>
							<option value="breakfast" htmlFor="breakfast" id="breakfast" onChange={this.handleChange}>Breakfast</option>
							<option value="lunch" htmlFor="lunch" id="lunch" onChange={this.handleChange}>Lunch</option>
							<option value="dinner" htmlFor="dinner" id="dinner" onChange={this.handleChange}>Dinner</option>
						</select>
						<input className="text-box" type="date" id="date" onChange={this.handleChange}/> <br/>
						<input className="text-box" type="time" id="time" onChange={this.handleChange}/> <br/>
						<button className="book-btn">Submit</button>
				</form>
			</div>
			</div>
		)
	}
}

export default Booking