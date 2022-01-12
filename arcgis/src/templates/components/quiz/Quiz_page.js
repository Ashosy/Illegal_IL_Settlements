import React, { Button } from "react";
import questions from "../../../data/quiz-data/data.js";
import "../../css/quiz.css";
import { useHistory } from "react-router-dom";




function QuizPage() {
  let history = useHistory();
  return (
    <>
      <section className="wrapper">
        <h1 className="title_quiz">Quiz Game</h1>
        <h2 className="subtitle_quiz">Questions Total : 10</h2>
        <div className="play-cards">
          <button onClick={() => history.push("/onScreen")} className="online">
            Play Online
          </button>
          <button
            onClick={() => {history.push('/onVirtual')}}
            className="virtual"
          >
            Play Virtual
          </button>
        </div>
      </section>
    </>
  );
}

export default QuizPage;
