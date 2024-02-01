import React from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";

const DrumMachine = ({ display, handleClick }) => {
  return (
    <div id="drum-machine">
      <Display display={display} />
      <DrumPad handleClick={handleClick} />
    </div>
  );
};

export default DrumMachine;
