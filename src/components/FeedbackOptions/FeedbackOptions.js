import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <FeedbackButton
      key={option}
      feedback={option}
      index={index}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default FeedbackOptions;
