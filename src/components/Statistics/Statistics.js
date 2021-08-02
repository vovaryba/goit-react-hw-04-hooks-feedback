import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const { feedbackCounter } = s;
  return (
    <>
      {total > 0 && (
        <>
          <p className={feedbackCounter}>Good: {good}</p>
          <p className={feedbackCounter}>Neutral: {neutral}</p>
          <p className={feedbackCounter}>Bad: {bad}</p>
          <p className={feedbackCounter}>Total: {total}</p>
          <p className={feedbackCounter}>
            Positive feedback: {good === 0 ? 0 : positivePercentage}%
          </p>
        </>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
