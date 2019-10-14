const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Reservation Model and Schema
const ReservationSchema = new Schema({
	firstname: {
		type: String,
		required: [true, 'first name is require']
	},
	lastname: {
		type: String,
	},
	email: {
		type: String,
		trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
		required: [true, 'Email Address is require'],
	},
	phonenumber: {
    type: String,
    minlength: 11,
    maxlength: 11,
    required: [true, 'Phone number required'],
  },
	typeoftable: {
		type: String,
	},
	purpose: {
		type: String,
	},
	mealplan: {
		type: String,
	},
	Time: {
		type: String,
		required: [true, 'Time is require'],
	},
	date: {
		type: String,
		required: [true, 'Date is require'],
	},
});

const Reservation = mongoose.model('reservation', ReservationSchema);

module.exports = Reservation;