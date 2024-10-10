import { monthsData } from "../data/monthsData";
import React from "react";

function JumpTo() {
  return (
    <div className="footer-container-calendar" style={{ padding: '10px' }}>
      <label htmlFor="month">Jump To: </label>
      <select id="month">
        {monthsData.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <select id="year">
        {/* Options to put year here */}
      </select>
    </div>
  );
}

export default JumpTo;
