import React from "react";
import { questionObject } from "../types";
import { questionData } from "../QuestionData";

interface Props {
  currentObject: questionObject | undefined;
  currentQuestionIdState: number;
  setIsTestCompletedFunction: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const Onechoice: React.FC<Props> = ({
  currentObject,
  currentQuestionIdState,
  setIsTestCompletedFunction,
  setCurrentQuestionIdFunction,
}) => {
  return currentQuestionIdState === questionData.length ? (
    <div>
      Onechoice
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
      Onechoice
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
