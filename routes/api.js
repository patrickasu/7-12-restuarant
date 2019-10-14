const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const Reservation = require('../models/reservation')

// post request
router.post('/reservations', function(req, res, next){
	Reservation.create(req.body).then(function(reservation){
		res.send(reservation);
	}).catch(next);
});

// contact form post request
router.get('/contact', (req, res, next) => {
    
    //Get Variables from query string in the search bar
    const {name, sender, topic, text } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
        details: name,
        to: 'patrickasu@gmail.com', 
        from: sender,
        subject: topic,
        text: text,
    }

    //Send Email
    sgMail.send(msg)
    .then((msg) => console.log(text));
});
module.exports = router;




