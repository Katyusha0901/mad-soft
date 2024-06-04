import React from "react";
import { questionObject } from "../types";
interface Props {
  currentObject: questionObject | undefined;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const Multichoice: React.FC<Props> = ({
  currentObject,
  setCurrentQuestionIdFunction,
}) => {
  return <div>Multichoice</div>;
};
