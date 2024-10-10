import React from "react";

function EventForm() {
  return (
    <div id="event-section">
      <h3>Add Event</h3>
      <input type="date" id="eventDate" />
      <input type="text" id="eventTitle" placeholder="Event Title" />
      <input type="text" id="eventDescription" placeholder="Event Description" />
      <button id="addEvent">Add</button>
    </div>
  );
}

export default EventForm;
