import React from "react";
import { useState } from "react";
import { questionData } from "./QuestionData";
import { Multichoice } from "./components/Multichoice";

export function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  function currentQuestionInformation() {
    return questionData.find((object) => object.id === currentQuestionId);
  }

  return currentQuestionInformation()?.type==="multichoice" ? (<Multichoice/>):()
}
