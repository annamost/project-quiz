import { QuestionCard } from "./QuestionCard";
import { useState } from "react";

export const Main = ({ data }) => {
  const allQuestions = data.questions;
  const [points, setPoints] = useState(0);
  const [resultText, setResultText] = useState("");
  const [section, setSection] = useState(0);

  const displayResults = (points) => {
    setResultText(`This is your points : ${points}`);
  };

  return (
    <div>
      {section < allQuestions.length && (
        <div className="question-section">
          <QuestionCard
            key={allQuestions[section].questionTitle}
            data={allQuestions[section]}
            points={points}
            setPoints={setPoints}
            section={section}
            setSection={setSection}
          ></QuestionCard>
        </div>
      )}
      {section >= allQuestions.length && (
        <div>
          <button
            onClick={(event) => {
              displayResults(points);
            }}
          >
            Submit
          </button>
          <button
            onClick={(event) => {
              setPoints(0);
              setResultText("");
              setSection(0);
            }}
          >
            Clear
          </button>
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
};
