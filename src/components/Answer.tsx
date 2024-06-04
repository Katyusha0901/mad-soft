import { useState } from "react";
import "../styles/Answer.css";

interface Props {
  answerData: string;
}
export const Answer: React.FC<Props> = ({ answerData }) => {
  const [isChekedAnswer, setIsChekedAnswer] = useState<boolean>(false);
  return (
    <div
      className="answer__checkbox"
      //   onChange={() => {
      //     onChange({ ...answerData, isCheked: !answerData.isCheked });
      //   }}
      onClick={() => {
        setIsChekedAnswer(true);
      }}
    >
      {isChekedAnswer ? "✔" : null}
    </div>
  );
};
