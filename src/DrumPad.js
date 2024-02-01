import React from "react";

export const DrumPad = ({ handleClick }) => {
  return (
    <div className="drum-pad-pad">
      <button
        className="drum-pad"
        id="heater_1"
        onClick={() => handleClick("Q")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          className="clip"
          id="Q">
          Heater 1
        </audio>
        Q
      </button>
      <button
        className="drum-pad"
        id="heater_2"
        onClick={() => handleClick("W")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          className="clip"
          id="W">
          Heater 2
        </audio>
        W
      </button>
      <button
        className="drum-pad"
        id="heater_3"
        onClick={() => handleClick("E")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          className="clip"
          id="E">
          Heater 3
        </audio>
        E
      </button>
      <button
        className="drum-pad"
        id="heater_4"
        onClick={() => handleClick("A")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          className="clip"
          id="A">
          Heater 4
        </audio>
        A
      </button>
      <button className="drum-pad" id="clap" onClick={() => handleClick("S")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          className="clip"
          id="S">
          Clap
        </audio>
        S
      </button>
      <button
        className="drum-pad"
        id="open_hh"
        onClick={() => handleClick("D")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          className="clip"
          id="D">
          Open HH
        </audio>
        D
      </button>
      <button
        className="drum-pad"
        id="kick_hat"
        onClick={() => handleClick("Z")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          className="clip"
          id="Z">
          Kick Hat
        </audio>
        Z
      </button>
      <button className="drum-pad" id="kick" onClick={() => handleClick("X")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          className="clip"
          id="X">
          Kick
        </audio>
        X
      </button>
      <button
        className="drum-pad"
        id="closed_hh"
        onClick={() => handleClick("C")}>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          className="clip"
          id="C">
          Closed HH
        </audio>
        C
      </button>
    </div>
  );
};

export default DrumPad;
