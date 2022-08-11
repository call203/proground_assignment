import React, { useMemo } from 'react';
import styles from './card.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Card = React.memo(({cardInfo, number}) => {
  const {image, serialNumber, price} = cardInfo
 
  const getNumber = () => {
    return Number(number) + 1
  }
  
  useMemo(getNumber, [number]); // FAST
  return (
    <div className={cx('card')} >
      <div className='card-index'>
        { getNumber() }
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
});

export default Card