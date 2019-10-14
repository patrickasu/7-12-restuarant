import React from 'react';
import {EventList} from '../data/events';
import { Link } from 'react-router-dom';

const Events = (props) => {
    let events = EventList.map((event) => {
      return (
        <div className="events-container">
          <Link to={`/events/${event.url}`}><div className="my-events-image" style={{ backgroundImage: "url(" + event.img_src + ")" }}></div></Link>
          <h3 className="events-name">{event.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <h1 className="event-title">{props.title}</h1>
        <div className="container">
          {events}
        </div>
      </div>
    );
}

export default Events;