import { QuestionTitle } from "./QuestionTitle";
import { QuestionForm } from "./QuestionForm";
import { useState } from "react";

export const QuestionCard = ({ data, points, setPoints }) => {
  const qTitle = data.questionTitle;
  const qChoices = data.questionsChoices;
  const qType = data.questionType;
  const qSolution = data.solution;

  return (
    <div>
      <QuestionTitle qTitle={qTitle}></QuestionTitle>
      <QuestionForm
        qChoices={qChoices}
        qType={qType}
        qSolution={qSolution}
        data={data}
        points={points}
        setPoints={setPoints}
      ></QuestionForm>
      <h1>My points = {points}</h1>
    </div>
  );
};
