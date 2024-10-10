
function Reminders() {
  return (
    <div id="reminder-section">
      <h3>Reminders</h3>
      <ul id="reminderList">
        <li data-event-id="1">
          <button className="delete-event">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default Reminders;
