import React, { useEffect } from 'react';
import ScoreBoard from '../components/atoms/ScoreBoard';
import WalkBoard from '../components/atoms/WalkBoard';
import Loading from '../components/atoms/Loading';
import Card from '../components/atoms/Card';
import styles from './main.module.css';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersData } from '../reducers/user';

const cx = classNames.bind(styles);
const Main = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user.list);
  useEffect(() => {
    dispatch(getUsersData())
  }, [dispatch]); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log()
  };

  if (error) return <div>에러 발생!</div>;
  if (!data || loading) return <Loading />;
  return (
    <>
      <div className={cx('main-wrapper')}>
        <ScoreBoard/>
        <div className={cx('walk-board-body')}>
          <p className={cx('walk-board-title')}>Estimated WALK</p> 
          <WalkBoard/>
        </div>
        <div className={cx('leader-board-header')}>
          <p>Leader Board</p>
          <Link to="/board">View All</Link> 
        </div>
        <div className={cx('leader-board-body')}>
          {data.map((item, index) => {
            return <Card cardInfo={item} number={index} key={index}/>
          })}
        </div>
      </div>
    </>
  );
};

export default Main;