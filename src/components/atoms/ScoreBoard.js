import React from 'react';
import styles from './scoreboard.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const ScoreBoard = (props) => {
  return (
    <div className={cx('wrapper')}>
      <header>
        Daily Score
      </header>
      <div className={cx('score-container')}>
        <strong>0</strong><span>point</span>
      </div>
      <div className={cx('progress-container')}>
        <div className={cx('progress-basic-bar')}></div>
      </div>
      <span className={cx('score-info-message')}>Top<b>100%</b> of Super Walkers</span>
    </div>
  );
};

export default ScoreBoard;