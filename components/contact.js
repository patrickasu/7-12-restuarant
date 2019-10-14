/*
* Author: Solomon Antoine
* Date: 5/23/2018
* This app sends emails via Sendgrid
*/
import React, { Component } from 'react';

class Contact extends Component {

  state = {
    email: {
      name: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`/api/contact?sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
      window.location = '/';
  }

  render() {
    const { email } = this.state;
    return (
    	<div className="main-content">
        <h2 className="contact-header">Contact Us</h2>
	    	<div className="contact-section">
  		    <div className="contact-row">
  					<i class="fas fa-map-marker-alt"></i> <span className="header-span">Bovibe Villa N0. 25 Cooperative, Villa Estate Badore Ajah</span> <span className="myspan">Lagos State</span><br/>
  					<i class="fas fa-envelope"></i> <span className="header-span">7/12@gmail.com, 7/12@yahoo.com <br/></span> <span className="myspan">fs@gmail.com, 7/12square@hotmail.com</span><br/>
            <i class="fas fa-mobile-alt"></i> <span className="header-span">08184565327, 09632875643, 09054532178, 09076543267</span> <span className="myspan">6755, 8743, 4358, 8421, 6735, 7374, 9533, 4375, 4222, 4543</span><br/>
          </div>
		      <div className="contact-form-row">
		        <form className="contact-form">
		          <input className="msg" value={email.name} placeholder="Enter Your Name" onChange={e => this.setState({ email: { ...email, name: e.target.value } })} /> <br/>
		          <input className="msg" value={email.sender} placeholder="Email" onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} /> <br/>
		          <input className="msg" value={email.subject} placeholder="Subject" onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} /> <br/>
		          <textarea className="msg" value={email.text} placeholder="Message" onChange={e => this.setState({ email: { ...email, text: e.target.value } })} /> <br/>
		          <button className="msg-btn" onClick={this.sendEmail}>Send Message</button>
		        </form>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default Contact;
