import { useState, useContext } from "react";
import "../styles/Answer.css";
import { questionObject } from "../types";
import { QuestionsContext } from "../QuestionsContext";

interface Props {
  currentQuestionId: number;
  answerData: { text: string; isChecked: boolean };
}
export const Answer: React.FC<Props> = ({ currentQuestionId, answerData }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  function changeAnswersData(answerData: { text: string; isChecked: boolean }) {
    const newQuestions = questions.map((question: questionObject) => {
      if (question.id === currentQuestionId) {
        return {
          id: question.id,
          type: question.type,
          text: question.text,
          answers: question.answers.map((answer) => {
            if (answer.text === answerData.text) {
              return answerData;
            }
            return answer;
          }),
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  }
  return (
    <div className="answer">
      <div
        className="answer__checkbox"
        onClick={() => {
          changeAnswersData({
            text: answerData.text,
            isChecked: !answerData.isChecked,
          });
        }}
      >
        {answerData.isChecked ? "✔" : null}
      </div>
      <div className="answer__text">{answerData.text}</div>
    </div>
  );
};
