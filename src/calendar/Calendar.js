import EventForm from './EventForm';
import Reminders from './Reminders';
import CalendarHeadler from './CalendarHeadler';
import CalendarTable from './CalendarTable';
import JumpTo from './JumpTo';
import React from "react";
import Header from '../header/Header';


function Calendar() {
  return (
    <>
    <Header/>
    <section className="calendar-section">
      <div className="wrapper">
        <div className="container-calendar">
          <div id="left">
            <h1>Dynamic Calendar</h1>
            <EventForm />
            <Reminders />
          </div>
          <div id="right">
            <CalendarHeadler />
            <CalendarTable />
            <JumpTo />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Calendar;
