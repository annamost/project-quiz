import { QuestionCard } from "./QuestionCard";
import { useState } from "react";

export const Main = ({ data, name, setName, avatar, setAvatar }) => {
  const allQuestions = data.questions;
  const [points, setPoints] = useState(0);
  const [resultText, setResultText] = useState("");
  const [startScreen, setStartScreen] = useState(true);
  const [section, setSection] = useState();
  const [buttonText, setButtonText] = useState("Clear");
  const [currProgress, setCurrProgress] = useState(0);
  const avatarChoices = data.avatars;
  const progrSteps = 1 / allQuestions.length;

  const displayResults = (points) => {
    if (points == 0) {
      setResultText(`Oh no, you have ${points} points 😥`);
    } else {
      setResultText(`Your point total is : ${points} 🥳`);
    }
  };

  return (
    <>
      {startScreen && (
        <div className="start-screen">
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Name:
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </label>
          </form>
          <form className="avatar-form">
            <label>
              <select
                onChange={(event) => {
                  // console.log(avatar);
                  setAvatar(event.target.value);
                }}
              >
                <option value={avatarChoices[0]}>{avatarChoices[0]}</option>
                <option value={avatarChoices[1]}>{avatarChoices[1]}</option>
                <option value={avatarChoices[2]}>{avatarChoices[2]}</option>
                <option value={avatarChoices[3]}>{avatarChoices[3]}</option>
                <option value={avatarChoices[4]}>{avatarChoices[4]}</option>
              </select>
            </label>
          </form>
          <button
            className="start-button"
            onClick={(event) => {
              setPoints(0);
              setResultText("");
              setSection(0);
              setStartScreen(false);
            }}
          >
            Start
          </button>
        </div>
      )}
      {section < allQuestions.length && (
        <div className="question-section">
          <QuestionCard
            key={allQuestions[section].questionTitle}
            data={allQuestions[section]}
            points={points}
            setPoints={setPoints}
            section={section}
            setSection={setSection}
            currProgress={currProgress}
            setCurrProgress={setCurrProgress}
            progrSteps={progrSteps}
          ></QuestionCard>
        </div>
      )}
      {section >= allQuestions.length && (
        <div className="submit-card">
          <button
            className="submit-button"
            onClick={(event) => {
              displayResults(points);
              setButtonText("Restart");
            }}
          >
            Submit
          </button>
          <p>{resultText}</p>
          <button
            className="clear-button"
            onClick={(event) => {
              setPoints(0);
              setResultText("");
              setSection(0);
              setCurrProgress(0);
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
};
