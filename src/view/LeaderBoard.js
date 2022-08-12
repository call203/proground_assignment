import React, { useEffect, useState } from 'react';
import styles from './leaderboard.module.css';
import classNames from 'classnames/bind';
import Card from '../components/atoms/Card';
import Loading from '../components/atoms/Loading';
import ToastMenu from '../components/molecules/ToastMenu';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {BackBlack} from '../Asset'
import { getUsersData } from '../reducers/user';

const cx = classNames.bind(styles);
const LeaderBoard = () => {
  const [toastClick, setToastClick] = useState(false);
  const [item, setItem] = useState({});
  const { data, loading, error } = useSelector((state) => state.user.list);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if(data.length < 11) dispatch(getUsersData())
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = (event) => {
    const windowposition = event.srcElement.scrollingElement.scrollTop + window.innerHeight
    if(windowposition >= event.srcElement.scrollingElement.scrollHeight){
      if(!loading){
        dispatch(getUsersData())
      }
    }
  };

  const clickHandler = (item) => {
    setItem(item)
    setToastClick(true)
  }

  const overlayToast = () => {
    return <ToastMenu item={item} toastClick={toastClick} setToastClick={setToastClick} />
  }

  if (error) return <div>에러 발생!</div>;
  if (!data) return
  return (
    <div>
       {loading && <Loading />}
      <div className={cx('leader-board-header')}>
        <Link to="/" className={cx('arrow-back')}>
         <img src={BackBlack} alt="BackBlack" />
        </Link> 
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