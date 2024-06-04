import React from "react";
import { useState } from "react";
import { questionData } from "./QuestionData";
import { Multichoice } from "./components/Multichoice";
import { Onechoice } from "./components/Onechoice";
import { ShortAnswer } from "./components/ShortAnswer";
import { LongAnswer } from "./components/LongAnswer";

export function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);

  function currentQuestionInformation() {
    return questionData.find((object) => object.id === currentQuestionId);
  }

  return currentQuestionInformation()?.type === "multichoice" ? (
    <Multichoice
      currentObject={currentQuestionInformation()}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "onechoice" ? (
    <Onechoice
      currentObject={currentQuestionInformation()}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "shortAnswer" ? (
    <ShortAnswer
      currentObject={currentQuestionInformation()}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "longAnswer" ? (
    <LongAnswer
      currentObject={currentQuestionInformation()}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : (
    <div></div>
  );
}
