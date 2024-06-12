import { createContext, ReactNode, useState } from "react";
import { questionData } from "./QuestionData";
import { questionObject } from "./types";

interface ContextType {
  questions: questionObject[];
  setQuestions: React.Dispatch<React.SetStateAction<questionObject[]>>;
}

export const QuestionsContext = createContext<ContextType>({
  questions: questionData,
  setQuestions: () => questionData,
});

interface Props {
  children: ReactNode;
}

export const QuestionsContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<questionObject[]>(questionData);
  const ContextValue: ContextType = { questions, setQuestions };

  return (
    <QuestionsContext.Provider value={ContextValue}>
      {children}
    </QuestionsContext.Provider>
  );
};
