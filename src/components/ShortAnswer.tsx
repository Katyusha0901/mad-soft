import React from "react";
import { questionObject } from "../types";
import { questionData } from "../QuestionData";

interface Props {
  currentObject: questionObject | undefined;
  currentQuestionIdState: number;
  setIsTestCompletedFunction: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const ShortAnswer: React.FC<Props> = ({
  currentObject,
  currentQuestionIdState,
  setIsTestCompletedFunction,
  setCurrentQuestionIdFunction,
}) => {
  return currentQuestionIdState === questionData.length ? (
    <div>
      ShortAnswer
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
      ShortAnswer
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
