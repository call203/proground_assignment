import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './leaderboard.module.css';
import classNames from 'classnames/bind';
import Card from '../components/atoms/Card';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const LeaderBoard = () => {
  const { data, loading, error } = useSelector((state) => state.user.list);
  
  return (
    <div>
      <div className={cx('leader-board-header')}>
        {/* <Link to="/board">View All</Link>  */}
        <p>Leader Board</p>
      </div>
      <div className={cx('leader-board-body')}>
        {data.map((item, key) => {
          return <Card cardInfo={item} key={key} />
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;