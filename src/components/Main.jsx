import { QuestionCard } from "./QuestionCard";
import { useState } from "react";

export const Main = ({ data }) => {
  const allQuestions = data.questions;
  const [points, setPoints] = useState(0);
  const [resultText, setResultText] = useState("");

  const displayResults = (points) => {
    setResultText(`This is your points : ${points}`);
  };

  return (
    <div>
      <div className="question-section">
        {allQuestions.map((quest) => {
          return (
            <QuestionCard
              key={quest.questionTitle}
              data={quest}
              points={points}
              setPoints={setPoints}
            ></QuestionCard>
          );
        })}
      </div>
      <button
        onClick={(event) => {
          displayResults(points);
        }}
      >
        Submit
      </button>
      <p>{resultText}</p>
    </div>
  );
};
