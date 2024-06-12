import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { QuestionsContextProvider } from "./QuestionsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <App />
    </QuestionsContextProvider>
  </React.StrictMode>
);
