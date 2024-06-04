import React from "react";
import { useState } from "react";
import { questionData } from "./QuestionData";
import { Multichoice } from "./components/Multichoice";
import { Onechoice } from "./components/Onechoice";
import { ShortAnswer } from "./components/ShortAnswer";
import { LongAnswer } from "./components/LongAnswer";

export function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);
  function currentQuestionInformation() {
    return questionData.find((object) => object.id === currentQuestionId);
  }

  return isTestCompleted ? (
    <div>Тест завершен</div>
  ) : currentQuestionInformation()?.type === "multichoice" ? (
    <Multichoice
      currentObject={currentQuestionInformation()}
      currentQuestionIdState={currentQuestionId}
      setIsTestCompletedFunction={setIsTestCompleted}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "onechoice" ? (
    <Onechoice
      currentObject={currentQuestionInformation()}
      currentQuestionIdState={currentQuestionId}
      setIsTestCompletedFunction={setIsTestCompleted}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "shortAnswer" ? (
    <ShortAnswer
      currentObject={currentQuestionInformation()}
      currentQuestionIdState={currentQuestionId}
      setIsTestCompletedFunction={setIsTestCompleted}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : currentQuestionInformation()?.type === "longAnswer" ? (
    <LongAnswer
      currentObject={currentQuestionInformation()}
      currentQuestionIdState={currentQuestionId}
      setIsTestCompletedFunction={setIsTestCompleted}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  ) : (
    <div></div>
  );
}
