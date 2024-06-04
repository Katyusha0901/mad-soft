import React from "react";
import { questionObject } from "../types";
interface Props {
  currentObject: questionObject | undefined;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const ShortAnswer: React.FC<Props> = ({
  currentObject,
  setCurrentQuestionIdFunction,
}) => {
  return <div>ShortAnswer</div>;
};
