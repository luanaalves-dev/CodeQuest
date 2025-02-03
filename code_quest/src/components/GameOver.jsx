import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Game Over!</h2>
        <p>Score: x</p>
        <p>You got y out of z questions right.</p>
        <img src={WellDone} alt="End of the Quiz"/>
        <button>Restart</button>
    </div>
  );
}

export default GameOver