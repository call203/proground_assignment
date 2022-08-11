import React from 'react';
import { Link } from 'react-router-dom';
import styles from './leaderboard.module.css';
import classNames from 'classnames/bind';
import Card from '../components/atoms/Card';
import Overlay from '../components/atoms/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../reducers/user';

const cx = classNames.bind(styles);
const LeaderBoard = () => {
  const dispatch = useDispatch();
  const { list, item } = useSelector((state) => state.user);
  const { data, loading, error } = list
 
  const clickHandler = (item) => {
    dispatch(getUserData(item))
  }

  const overlayToast = () => {
    if (item.loading) return <div>로딩중...</div>;
    if (item.error) return <div>에러 발생!</div>;
    if (!item.data) return null; 
    
    return <Overlay item={item.data}/>
  }

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return (
    <div>
      <div className={cx('leader-board-header')}>
        {/* <Link to="/board">View All</Link>  */}
        <p>Leader Board</p>
      </div>
      <div className={cx('leader-board-body')}>
        {data.map((value, index) => {
          return (
            <div onClick={() => clickHandler(value)}>
              <Card cardInfo={value} number={index} key={index} />
            </div>
          )
        })}
      </div>
      {overlayToast()}
    </div>
  );
};

export default LeaderBoard;