import React from 'react';
import styles from './header.module.css';
import classNames from 'classnames/bind';
import {UserProfile,CNK,GRND,KLAY,Wallet} from '../../Asset'
const cx = classNames.bind(styles);
const Header = (props) => {
  return (
    <>
    <div className={cx("wrapper")}>
      <div className={cx('user-icon')}>
        <img src={UserProfile} alt="UserProfile" />
      </div>
      <div className={cx('content')}>
        <div className={cx('network-content')}>
          <span className={cx('network-content-item')}>
            <img src={CNK} alt="CNK" />
              <b>1.2</b>
          </span>
          <span className={cx('network-content-item')}>
            <img src={GRND} alt="GRND" />
              <b>0</b>
          </span>
          <span className={cx("network-content-item")}>
            <img src={KLAY} alt="KLAY" />
              <b>1.07</b>
          </span>
        </div>
        <div className={cx('wallet-content')}>
          <img src={Wallet} alt="Wallet" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;