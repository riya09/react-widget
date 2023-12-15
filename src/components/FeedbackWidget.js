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
        <div className="feedbackWidget__rating">
          {[...Array(5)].map((_, k) => (
            <label htmlFor={k+1} key={k}>
              <input id={k+1} type="radio" name="rating" value={k+1} />
              <span>{k + 1}</span>
            </label>
          ))}
        </div>
        <div className="feedbackWidget__btn--container">
          <button
          className="feedbackWidget__btn--submit"
          onClick={handleSubmit}
        >
          { buttonText }
        </button>
        </div>
      </div>
    </div>
  );
}
export default FeedbackWidget
