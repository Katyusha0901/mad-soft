import { useState, useContext } from "react";
import "../styles/Answer.css";
import { questionObject } from "../types";
import { QuestionsContext } from "../QuestionsContext";

interface Props {
  currentQuestionId: number;
  currentQuestion: questionObject | undefined;
  answerData: { text: string; isChecked: boolean };
}
export const Answer: React.FC<Props> = ({
  currentQuestionId,
  currentQuestion,
  answerData,
}) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  function changeAnswersDataMulti(answerData: {
    text: string;
    isChecked: boolean;
  }) {
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
    localStorage.setItem(
      `${currentQuestionId}`,
      JSON.stringify(newQuestions[currentQuestionId - 1].answers)
    );
  }

  function changeAnswersDataOne(answerData: {
    text: string;
    isChecked: boolean;
  }) {
    const newQuestions = questions.map((question: questionObject) => {
      if (question.id === currentQuestionId) {
        return {
          id: question.id,
          type: question.type,
          text: question.text,
          answers: question.answers.map((answer) => {
            if (answer.text === answerData.text) {
              return { text: answer.text, isChecked: true };
            }
            return { text: answer.text, isChecked: false };
          }),
        };
      }
      return question;
    });
    setQuestions(newQuestions);
    localStorage.setItem(
      `${currentQuestionId}`,
      JSON.stringify(newQuestions[currentQuestionId - 1].answers)
    );
  }
  return (
    <div className="answer">
      <div
        className="answer__checkbox"
        onClick={() => {
          if (currentQuestion?.type === "multichoice") {
            changeAnswersDataMulti({
              text: answerData.text,
              isChecked: !answerData.isChecked,
            });
          } else if (currentQuestion?.type === "onechoice") {
            changeAnswersDataOne({ text: answerData.text, isChecked: true });
          }
        }}
      >
        {answerData.isChecked ? "✔" : null}
      </div>
      <div className="answer__text">{answerData.text}</div>
    </div>
  );
};
