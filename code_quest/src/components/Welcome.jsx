import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz_code.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
      <h2>Welcome to the CodeQuest Game</h2>
      <p>Click the button below to start:</p>
      <button  onClick={() => dispatch({type:"CHANGE_STATE"})}>Start</button>
      <img src={Quiz} alt="Start of Quiz" />
    </div>
  );
};

export default Welcome;
