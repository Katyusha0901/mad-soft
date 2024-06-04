import React from "react";
import { useState } from "react";
import { questionData } from "./QuestionData";
import { Multichoice } from "./components/Multichoice";
import { Onechoice } from "./components/Onechoice";
import { ShortAnswer } from "./components/ShortAnswer";

export function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  function currentQuestionInformation() {
    return questionData.find((object) => object.id === currentQuestionId);
  }

  return currentQuestionInformation()?.type==="multichoice" ? (<Multichoice/>):(
    currentQuestionInformation()?.type === 'onechoice' ?(<Onechoice/>):(
currentQuestionInformation()?.type === 'shortAnswer' ?(<ShortAnswer/>):(
  
)
    )
  )
}
