import React from "react";
import { questionObject } from "../types";
import { questionData } from "../QuestionData";

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
    <div>
      Multichoice
      <button
        onClick={() => {
          setIsTestCompletedFunction(true);
        }}
      >
        Завершить
      </button>
    </div>
  ) : (
    <div>
      Multichoice
      <button
        onClick={() => {
          setCurrentQuestionIdFunction(currentQuestionIdState + 1);
        }}
      >
        Отправить
      </button>
      <button
        onClick={() => {
          setCurrentQuestionIdFunction(currentQuestionIdState - 1);
        }}
      >
        Назад
      </button>
    </div>
  );
};
