import { useState } from "react";

export const QuestionForm = ({
  qChoices,
  qType,
  qSolution,
  data,
  points,
  setPoints,
  section,
  setSection,
}) => {
  const normalQ = qType == 1;
  const [answer, setAnswer] = useState();

  return (
    <div>
      {normalQ ? (
        <div>
          <form>
            Answer:
            {qChoices.map((choice) => {
              return (
                <label key={choice}>
                  <input
                    type="radio"
                    value={choice}
                    onChange={(event) => setAnswer(event.target.value)}
                    checked={answer == choice}
                  />
                  {choice}
                </label>
              );
            })}
          </form>
        </div>
      ) : (
        <div>
          <form>
            <select
              onChange={(event) => setAnswer(event.target.value)}
              value={answer}
            >
              <option value={qChoices[0]}>{data.fixedChoices[0]}</option>
              <option value={qChoices[1]}>{data.fixedChoices[1]}</option>
              <option value={qChoices[2]}>{data.fixedChoices[2]}</option>
              <option value={qChoices[3]}>{data.fixedChoices[3]}</option>
            </select>
          </form>
        </div>
      )}
      <button
        onClick={(event) => {
          if (answer == qSolution) {
            setPoints(points + 1);
          } else {
            if (points != 0) {
              setPoints(points - 1);
            }
          }
          setSection(section + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
