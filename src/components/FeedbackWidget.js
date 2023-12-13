import { useEffect } from 'react';
import './widget.scss'

const FeedbackWidget = (props) => {
  const {
    titleText = 'Rate your experience',
    buttonText = 'Submit',
    themeColor = '#3457dc',
    handleSubmit
  } = props

  useEffect(() => {
    document.documentElement.style.setProperty('--base', themeColor);
  }, [themeColor])

  return (
    <div className="brand__feedbackWidget">
      <div className="feedbackWidget__container">
        <h1 className="feedbackWidget__title">
          {titleText}
        </h1>
        <button
          className="feedbackWidget__btn--submit"
          onClick={handleSubmit}
        >
          { buttonText }
        </button>
      </div>
    </div>
  );
}
export default FeedbackWidget
