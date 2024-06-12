import React from "react";
import { useState, useContext } from "react";
import { Multichoice } from "./components/Multichoice";
import { ShortAnswer } from "./components/ShortAnswer";
import { LongAnswer } from "./components/LongAnswer";
import { QuestionsContext } from "./QuestionsContext";

export function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);
  const { questions } = useContext(QuestionsContext);

  function currentQuestionInformation() {
    return questions.find((object) => object.id === currentQuestionId);
  }

  return isTestCompleted ? (
    <div>Тест завершен</div>
  ) : (
    <Multichoice
      currentObject={currentQuestionInformation()}
      currentQuestionIdState={currentQuestionId}
      setIsTestCompletedFunction={setIsTestCompleted}
      setCurrentQuestionIdFunction={setCurrentQuestionId}
    />
  );
  // currentQuestionInformation()?.type === "multichoice" ? (
  //   <Multichoice
  //     currentObject={currentQuestionInformation()}
  //     currentQuestionIdState={currentQuestionId}
  //     setIsTestCompletedFunction={setIsTestCompleted}
  //     setCurrentQuestionIdFunction={setCurrentQuestionId}
  //   />
  // ) : currentQuestionInformation()?.type === "onechoice" ? (
  //   <Onechoice
  //     currentObject={currentQuestionInformation()}
  //     currentQuestionIdState={currentQuestionId}
  //     setIsTestCompletedFunction={setIsTestCompleted}
  //     setCurrentQuestionIdFunction={setCurrentQuestionId}
  //   />
  // ) : currentQuestionInformation()?.type === "shortAnswer" ? (
  //   <ShortAnswer
  //     currentObject={currentQuestionInformation()}
  //     currentQuestionIdState={currentQuestionId}
  //     setIsTestCompletedFunction={setIsTestCompleted}
  //     setCurrentQuestionIdFunction={setCurrentQuestionId}
  //   />
  // ) : currentQuestionInformation()?.type === "longAnswer" ? (
  //   <LongAnswer
  //     currentObject={currentQuestionInformation()}
  //     currentQuestionIdState={currentQuestionId}
  //     setIsTestCompletedFunction={setIsTestCompleted}
  //     setCurrentQuestionIdFunction={setCurrentQuestionId}
  //   />
  // ) : (
  //   <div></div>
  // );
}
