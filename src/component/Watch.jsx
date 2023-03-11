import React, { useEffect, useState } from "react";

export default function Watch() {
  var currentTime = new Date();
  const [time, setTime] = useState(currentTime.toLocaleTimeString());
  const timehandler = () => {
    const date = new Date().toLocaleTimeString();
    // console.log(currentTime)
    setTime(date);
    // setTime(new Date());
  };
  useEffect(() => {
    setInterval(() => {
      timehandler();
    }, 1000);
    // timehandler()
  }, []);
  // useEffect(() => {
  //   setInterval(()=>{
  //       timehandler()
  //   }, 1000)
  // }, [])

  // console.log(time.toLocaleTimeString())
  return (
    <>
      <div className="watch_box">
        <span className="watch_box_time">{time}</span>
      </div>
    </>
  );
}
