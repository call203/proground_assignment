import React from 'react';
import styles from './overlay.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Overlay = ({item}) => {
  const {image, serialNumber, price} = item

  return (
    <>
      <div
        className={cx('overlay')}
        // @click="$emit('onClick')"
        // @click.self="$emit('onClick:self')"
        >
         <div className={cx('toast-wrapper')}> 
           <div className={cx('toast-title')}>
             <p>Profile</p>  
           </div>
           <div className={cx('toast-content')}>
            <div className={cx('toast-card-img')}>
              <img src={image} alt="img" />
            </div>
            <span className={cx('toast-user-name')}>
              { serialNumber }
            </span>     
          </div> 
          <div className={cx('toast-button-content')}>
            <button className={cx('toast-button')}>Block</button>      
          </div>
         </div>
      </div>
    </>
  );
};

export default Overlay;