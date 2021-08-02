import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, index, onLeaveFeedback }) => {
  const { feedbackButton } = s;
  return (
    <button
      className={feedbackButton}
      data-feedback={feedback}
      type="button"
      onClick={() => {
        onLeaveFeedback[index](prevState => prevState + 1);
      }}
    >
      {feedback}
    </button>
  );
};

FeedbackButton.propTypes = {
  feedback: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default FeedbackButton;
