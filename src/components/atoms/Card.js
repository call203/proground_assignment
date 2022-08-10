import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../reducers/user';

const cx = classNames.bind(styles);
const Card = (props) => {
  const {image, serialNumber, price} = props.cardInfo
  const dispatch = useDispatch();

  const clickHandler = e => {
    dispatch(getUserData(serialNumber))
  }

  return (
    <div className={cx('card')} onClick={clickHandler}>
      <div className='card-index'>
        1
      </div>
      <div className={cx('card-content')}>
        <div className={cx('card-img')}>
          <img src={image} alt="img" />
        </div>
        <span className={cx('card-user-name')}>
          { serialNumber }
        </span>     
      </div>
     
      <div className={cx('card-date')}>
        { price }
      </div>
    </div>
  );
};

export default Card;