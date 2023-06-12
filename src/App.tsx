import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [scoreBS, setScoreBS] = useState(0);
  const [scoreBMLeft, setScoreBMLeft] = useState(0);
  const [scoreBMRight, setScoreBMRight] = useState(0);

  const handleScoreBS = (number: number) => {
    setScoreBS(scoreBS + number);
  };
  const handleScoreBMLeft = () => {
    setScoreBMLeft(scoreBMLeft + 1);
  };
  const handleScoreBMRight = () => {
    setScoreBMRight(scoreBMRight + 1);
  };

  return (
    <div>
      <div>
        <h2>Basketball Scoring App</h2>
        <p>Score : {scoreBS} </p>
        <button onClick={() => handleScoreBS(1)}>1</button>
        <button onClick={() => handleScoreBS(2)}>2</button>
        <button onClick={() => handleScoreBS(3)}>3</button>
      </div>
      <div>
        <h2>Badminton Scoring App</h2>
        <span>Score Left:{scoreBMLeft} </span>
        <span>Score Right: {scoreBMRight}</span>
        <div>
          <button onClick={() => handleScoreBMLeft()}>Left</button>
          <button onClick={() => handleScoreBMRight()}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default App;
