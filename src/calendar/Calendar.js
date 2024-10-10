import EventForm from './EventForm';
import Reminders from './Reminders';
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';
import JumpTo from './JumpTo';

function Calendar() {
  return (
    <section className="calendar-section">
      <div className="wrapper">
        <div className="container-calendar">
          <div id="left">
            <h1>Dynamic Calendar</h1>
            <EventForm />
            <Reminders />
          </div>
          <div id="right">
            <CalendarHeader />
            <CalendarTable />
            <JumpTo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
