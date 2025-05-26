import { QuestionTitle } from "./QuestionTitle";
import { QuestionForm } from "./QuestionForm";
import { useState } from "react";

export const QuestionCard = ({
  data,
  points,
  setPoints,
  section,
  setSection,
}) => {
  const qTitle = data.questionTitle;
  const qChoices = data.questionsChoices;
  const qType = data.questionType;
  const qSolution = data.solution;

  return (
    <div className="question-card">
      <QuestionTitle qTitle={qTitle}></QuestionTitle>
      <QuestionForm
        qChoices={qChoices}
        qType={qType}
        qSolution={qSolution}
        data={data}
        points={points}
        setPoints={setPoints}
        section={section}
        setSection={setSection}
      ></QuestionForm>
    </div>
  );
};
