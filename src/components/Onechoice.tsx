import React from "react";
import { questionObject } from "../types";
interface Props {
  currentObject: questionObject | undefined;
  setCurrentQuestionIdFunction: React.Dispatch<React.SetStateAction<number>>;
}

export const Onechoice: React.FC<Props> = ({
  currentObject,
  setCurrentQuestionIdFunction,
}) => {
  return <div>Onechoice</div>;
};
