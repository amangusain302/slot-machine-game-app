import React from "react";
import "./App.css";
import Heading from "./component/heading";
import Slots from "./component/Slots";
export default function App() {
  const emojies = [
    {
      x: "🤣",
      y: "🤣",
      z: "😍",
    },
    {
        x: "🚗",
        y: "🤣",
        z: "😍",
      },
      {
        x: "🎰",
        y: "🎰",
        z: "🎰",
      }
  ];
  return (
    <>
      <Heading />
      <div className="container">
        <div className="slot_box">
          <Slots x={emojies[0].x} y={emojies[0].y} z={emojies[0].z} />
          <Slots x={emojies[1].x} y={emojies[1].y} z={emojies[1].z} />
          <Slots x={emojies[2].x} y={emojies[2].y} z={emojies[2].z} />
        </div>
      </div>
    </>
  );
}
