import { useState, useEffect } from 'react';
import './widget.scss'

const FeedbackWidget = (props) => {
  const {
    titleText = 'Rate your experience',
    buttonText = 'Submit',
    themeColor = '#3457dc',
    handleSubmit = () => {},
  } = props;

  const [rating, setRating] = useState(null);
  const [hideWidget, toggleVisibility] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty('--base', themeColor);
  }, [themeColor]);

  useEffect(() => {
    toggleVisibility(false)
  }, [])

  const submitRating = () => {
    handleSubmit(rating)
    toggleVisibility(true)
  }

  return (
    <div className="brand__feedbackWidget">
      <div className={`feedbackWidget__container${hideWidget ? " hidden" : ""}`}>
        <div className="feedbackWidget__header">
          <h4 className="feedbackWidget__title">{titleText}</h4>
          <span onClick={() => toggleVisibility(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </div>
        <div className="feedbackWidget__rating">
          {[...Array(5)].map((_, k) => (
            <label htmlFor={k + 1} key={k}>
              <input
                onChange={() => setRating(k + 1)}
                id={k + 1}
                type="radio"
                name="rating"
                value={k + 1}
              />
              <span>{k + 1}</span>
            </label>
          ))}
        </div>
        <div className="feedbackWidget__btn--container">
          <button
            className="feedbackWidget__btn--submit"
            onClick={submitRating}
            disabled={!rating}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedbackWidget;
