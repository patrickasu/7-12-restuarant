import React from 'react';
import {EventList} from '../data/events';
import Event from './event';
import Events from './events';
import { Route} from 'react-router-dom';

const EventsContainer = (props) => {
    let eventUrl = EventList.map((event,i) => {
        return (
          <Route key={i} path={`/events/${event.url}`} render={() => <Event name={event.name} eventimage={event.event_img} image={event.img_src} description={event.description} time={event.time} date={event.date}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/events" render={() => <Events title="Our Events"/>} />
          {eventUrl}
        </React.Fragment>
    );
}

export default EventsContainer;