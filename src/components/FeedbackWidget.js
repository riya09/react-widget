import { useState, useEffect } from 'react';
import Rating from './Rating';
import './widget.scss'

const FeedbackWidget = (props) => {
  const {
    titleText = 'Help Us Improve with Your Valuable Feedback!',
    buttonText = 'Submit',
    themeColor = '#3457dc',
    handleSubmit = () => {},
  } = props;

  const [rating, setRating] = useState(null);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--base', themeColor);
  }, [themeColor]);

  useEffect(() => {
    setMounted(true)
  }, [])

  const submitRating = () => {
    handleSubmit(rating)
    setMounted(false)
  }

  return (
    <div className="brand__feedbackWidget">
      <div className={`feedbackWidget__container ${mounted ? "visible" : ""}`}>
        <div className="feedbackWidget__header">
          <h4 className="feedbackWidget__title">{titleText}</h4>
          <span onClick={() => setMounted(false)}>
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
        <Rating getRating={(val) => setRating(val)}/>
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
