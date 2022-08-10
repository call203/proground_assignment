import React from 'react';
import styles from './overlay.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Overlay = (props) => {
  return (
    <>
      <div
        className={cx('overlay')}
        // @click="$emit('onClick')"
        // @click.self="$emit('onClick:self')"
        >
        <slot />
      </div>
    </>
  );
};

export default Overlay;