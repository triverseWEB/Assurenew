import React, { useState, useEffect } from "react";

const SlotTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 600); // Update current time every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (hour, minute, period) => {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  const generateTimeSlots = (startHour, endHour, interval) => {
    const timeSlots = [];
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentPeriod = currentHour >= 12 ? "PM" : "AM";

    for (let hour = startHour; hour <= endHour; hour += interval) {
      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const formattedTime = formatTime(formattedHour, 0, period);

      if (
        (hour > currentHour && period === currentPeriod) ||
        (hour === currentHour && interval === 1 && 30 >= currentMinute)
      ) {
        timeSlots.push(
          <div key={formattedTime} className="app-border">
            <input
              type="radio"
              className="option-input radio"
              name="slot1"
              id={`slot-${formattedTime}`}
            />
            <label className="app-label" htmlFor={`slot-${formattedTime}`}>
              {formattedTime}
            </label>
          </div>
        );
      }
    }
    return timeSlots;
  };

  return (
    <>
      <div className="app-time">
        <div>
          <p>Morning Slot</p>
          <div className="app-check">{generateTimeSlots(7, 12, 0.5)}</div>
        </div>
        <div>
          <p>Afternoon</p>
          <div className="app-check">{generateTimeSlots(12, 16, 0.5)}</div>
        </div>
        <div>
          <p>Evening</p>
          <div className="app-check">{generateTimeSlots(16, 20, 0.5)}</div>
        </div>
      </div>
    </>
  );
};

export default SlotTime;
