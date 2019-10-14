import React from 'react';

const Event = (props) => {
    return (
      
            <div className="main-content">
                <div className="container">
                    <div className="event-image" style={{ backgroundImage: "url(" + props.eventimage + ")" }}></div>
                    <h2 className="event-image-name">{props.name}</h2>
                    <p className="event-description">{props.description}</p>
                    <h4 className="event-date">{props.date}</h4>
                    <h3 className="event-time">{props.time}</h3>
                </div>
            </div>
        
    );
}

export default Event;
