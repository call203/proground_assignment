import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Card = (props) => {
  return (
    <div className={cx('card')}>
      <div className='card-index'>
        {/* {{ props.count }} */}
        1
      </div>
      <div className={cx('card-content')}>
        {/* <img src={props.img} alt="img" /> */}
        <div className={cx('card-img')}>
          <img src="https://cdn.imweb.me/thumbnail/20220111/6e366bff0c29b.jpg" alt="img" />
        </div>
        <span className={cx('card-user-name')}>
          {/* {{ props.serialNumber }} */}
          태현
        </span>     
      </div>
     
      <div className={cx('card-date')}>
        {/* {{ props.date }} */}
        27.04
      </div>
    </div>
  );
};

export default Card;