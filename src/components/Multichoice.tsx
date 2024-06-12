import React from "react";
import { questionObject } from "../types";
import { questionData } from "../QuestionData";
import { Answer } from "./Answer";

interface Props {
  currentObject: questionObject | undefined;
  currentQuestionIdState: number;
  setIsTestCompletedFunction: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const Multichoice: React.FC<Props> = ({
  currentObject,
  currentQuestionIdState,
  setIsTestCompletedFunction,
  setCurrentQuestionIdFunction,
}) => {
  return currentQuestionIdState === questionData.length ? (
    <div className="multi">
      <div className="multi__content">
        <div className="multi__text"></div>
        <div className="multi__answers"></div>
      </div>
      <button
        className="multi__button-end"
        onClick={() => {
          setIsTestCompletedFunction(true);
        }}
      >
        Завершить
      </button>
    </div>
  ) : (
    <div className="multi">
      <div className="multi__content">
        <div className="multi__text">{currentObject?.text}</div>
        <div className="multi__answers">
          {currentObject?.answers.map((answer) => {
            return (
              <Answer
                currentQuestionId={currentQuestionIdState}
                answerData={answer}
                key={answer.text}
              />
            );
          })}
        </div>
      </div>
      <button
        className="multi__button-send"
        onClick={() => {
          setCurrentQuestionIdFunction(currentQuestionIdState + 1);
        }}
      >
        Отправить
      </button>
      <button
        className="multi__button-previous"
        onClick={() => {
          setCurrentQuestionIdFunction(currentQuestionIdState - 1);
        }}
      >
        Назад
      </button>
    </div>
  );
};
