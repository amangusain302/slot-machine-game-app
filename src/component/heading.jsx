import React, { useEffect, useState } from "react";

export default function Heading() {
  var currentTime = new Date();
  const [time, setTime] = useState(currentTime.toLocaleTimeString());
  const timehandler = () => {
    const date = new Date().toLocaleTimeString();
    setTime(date);
  };
  useEffect(() => {
    setInterval(() => {
      timehandler();
    }, 1000);
  }, []);
  return (
    <div className="heading_style">
      <div className="heading_text">
        🎰 Welcome To <b>Slot Machine Game</b> 🎰
      </div>

      <div className="watch_box">
        <span className="watch_box_time"><b>{time}</b></span>
      </div>
    </div>
  );
}
