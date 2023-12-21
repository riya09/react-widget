import React from "react";
import ReactDOM from "react-dom/client";
import FeedbackWidget from "./components/FeedbackWidget";

const feedbackWidget = {
  init: (config) => {
    // Use an existing element or create a new one
    const rootElement =
      document.getElementById("brand__feedbackWidget--root") ||
      document.createElement("div");
    rootElement.id = "brand__feedbackWidget--root";

    // If the element is newly created, append it to the body
    if (!document.getElementById("brand__feedbackWidget--root")) {
      document.body.appendChild(rootElement);
    }

    const root = ReactDOM.createRoot(rootElement);
    const { title, buttonText, theme, handleSubmit } = config;

    root.render(
      <React.StrictMode>
        <FeedbackWidget
          title={title}
          buttonText={buttonText}
          theme={theme}
          handleSubmit={(val) => handleSubmit(val)}
        />
      </React.StrictMode>
    );
  },
};
export { feedbackWidget };
