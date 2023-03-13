import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";
import Heading from "./component/heading";
import Slots from "./component/Slots";
export default function App() {
  const [emojies, setemojies] = useState([]);
  const emojiArray = ["🎰", "😍", "🚗", "💸"];
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [z, setZ] = useState(null);
  const [know, setknow] = useState(false);
  // console.log(emojies, "fist");
  const shuffleHandler = async () => {
    for (var i = 0; i <= 9000; i++) {
    // setTimeout( () => {
        var randomIndex =  Math.floor(Math.random() * emojiArray.length);
        flushSync(() => setX(emojiArray[randomIndex]));
        randomIndex =  Math.floor(Math.random() * emojiArray.length);
        flushSync(() => setY(emojiArray[randomIndex]));
        randomIndex = Math.floor(Math.random() * emojiArray.length);
        flushSync(() => setZ(emojiArray[randomIndex]));
      // }, 100);
      // if (i === 9000) setknow(true);
    }
    console.log(know)
    // clearInterval(intervalLoop);
    // if (know ===true){
    setemojies([...emojies, { x, y, z }]);
    setknow(false)
  // }
    console.log(emojies, "secd");
  };
  return (
    <>
      <Heading />
      {/* <div className="container_watch">
      <Watch/>    
      </div> */}
      <div className="container">
        <div className="slot_box">
          {emojies.map((Element) => {
            return <Slots x={Element.x} y={Element.y} z={Element.z} />;
          })}
          {/* <Slots x={emojies[1].x} y={emojies[1].y} z={emojies[1].z} />
          <Slots x={emojies[2].x} y={emojies[2].y} z={emojies[2].z} /> */}
        </div>
        <div className="container_shuffler">
          <div className="container_shuffler_one">{x}</div>
          <div className="container_shuffler_two">{y}</div>
          <div className="container_shuffler_three">{z}</div>
        </div>
        <button className="contianer_jackpot_btn" onClick={shuffleHandler}>
          JACKPOT
        </button>
      </div>
    </>
  );
}
