import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserData } from '../../reducers/user';

import styles from './toast.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Toast = ({item, setToastClick}) => {
  const {image, serialNumber, price} = item
  const { data } = useSelector((state) => state.user.list);

  const dispatch = useDispatch();

  const deleteUser = () => {
    setToastClick(false)
    const newList = data.filter((v) => v.serialNumber !== serialNumber)
    dispatch(deleteUserData(newList))
  }

  return (
    <> 
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
        <button className={cx('toast-button')} onClick={deleteUser}>Block</button>      
      </div>
    </>
  );
};

export default Toast;