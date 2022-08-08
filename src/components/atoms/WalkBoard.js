import React from 'react';
import styles from './walkboard.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const WalkBoard = (props) => {
  return (
    <div className={cx('wrapper')}>
      <header>You Can Earn</header>
      <div className={cx('walk-container')}>
        <strong>0</strong><span>Walk</span>
      </div>
      <span className={cx('walk-info-message')}>estimated as of yesterday</span>
    </div>
  );
};

export default WalkBoard;