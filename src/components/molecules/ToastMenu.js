import React, { useEffect, useRef } from 'react';
import styles from './toastmenu.module.css';
import classNames from 'classnames/bind';
import Toast from '../atoms/Toast';

const cx = classNames.bind(styles);
const ToastMenu = ({item, toastClick, setToastClick}) => {
  const toastEl = useRef();

  const modalCloseHandler = ({ target }) => {
    if(toastClick && !toastEl.current?.contains(target)){
      setToastClick(false)
    }
  };
  
  useEffect(() => {
    window.addEventListener('click', modalCloseHandler);
    return () => {
      window.removeEventListener('click', modalCloseHandler);
    };
  });

  return (
    <>
      {toastClick &&
      <div className={cx('overlay')}>
        <div ref={toastEl} className={cx('toast-wrapper')}>
          <Toast item={item} setToastClick={setToastClick} />
        </div>
      </div>
      }
    </>
  );
};

export default ToastMenu;