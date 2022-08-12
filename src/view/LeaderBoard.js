import React, { useState } from 'react';
import styles from './leaderboard.module.css';
import classNames from 'classnames/bind';
import Card from '../components/atoms/Card';
import Loading from '../components/atoms/Loading';
import ToastMenu from '../components/molecules/ToastMenu';
import { useSelector } from 'react-redux';
import { getUserData } from '../reducers/user';

const cx = classNames.bind(styles);
const LeaderBoard = () => {
  const [toastClick, setToastClick] = useState(false);
  const [item, setItem] = useState({});
  const { data, loading, error } = useSelector((state) => state.user.list);

  const clickHandler = (item) => {
    setItem(item)
    setToastClick(true)
  }

  const overlayToast = () => {
    return <ToastMenu item={item} toastClick={toastClick} setToastClick={setToastClick} />
  }

  if (error) return <div>에러 발생!</div>;
  if (!data || loading) return <Loading />;
  return (
    <div>
      <div className={cx('leader-board-header')}>
        {/* <Link to="/board">View All</Link>  */}
        <p>Leader Board</p>
      </div>
      <div className={cx('leader-board-body')}>
        {data.map((value, index) => {
          return (
            <div onClick={() => clickHandler(value)} key={index}>
              <Card cardInfo={value} number={index} />
            </div>
          )
        })}
      </div>
      { toastClick && overlayToast() }
    </div>
  );
};

export default LeaderBoard;