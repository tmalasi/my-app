import React from "react";

function CalendarHeadler() {
  return (
    <>
      <h3 id="monthAndYear"></h3>
      <div className="button-container-calendar">
        <button id="previous">‹</button>
        <button id="next">›</button>
      </div>
    </>
  );
}

export default CalendarHeadler;
