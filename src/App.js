import DrumMachine from "./DrumMachine";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const playAudio = letter => {
    if (document.getElementById(letter)) {
      return document.getElementById(letter).play();
    }
  };

  const showDisplay = letter => {
    let name = document.getElementById(letter);
    setDisplay(name.innerHTML);
  };

  const handleKeyDown = e => {
    if (document.getElementById(e.key.toUpperCase())) {
      e.preventDefault();
      handleClick(e.key.toUpperCase());
    }
  };

  const handleClick = letter => {
    playAudio(letter);
    showDisplay(letter);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <DrumMachine handleClick={handleClick} display={display} />
    </div>
  );
}

export default App;
