import React from 'react';
import styles from './loading.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Loading = (props) => {
  return (
    <>
    <div className={cx("white-overlay")}>
      <div className={cx("loader-wrapper")}>
        <div className={cx("wrapper")}>
          <div className={cx("spinner-container")}>
            <div className={cx("spinner-layer", "spinner-layer--blue")}>
              <div className={cx("spinner-clipper", "spinner-clipper--left")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner--patch")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner-clipper", "spinner-clipper--right")}>
                <div className={cx("spinner-circle")} />
              </div>
            </div>

            <div className={cx("spinner-layer", "spinner-layer--red")}>
              <div className={cx("spinner-clipper", "spinner-clipper--left")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner--patch")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner-clipper", "spinner-clipper--right")}>
                <div className={cx("spinner-circle")} />
              </div>
            </div>

            <div className={cx("spinner-layer", "spinner-layer--yellow")}>
              <div className={cx("spinner-clipper", "spinner-clipper--left")}>
                <div className={cx("spinner-circle")}_/>
              </div>
              <div className={cx("spinner--patch")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner-clipper", "spinner-clipper--right")}>
                <div className={cx("spinner-circle")} />
              </div>
            </div>

            <div className={cx("spinner-layer", "spinner-layer--green")}>
              <div className={cx("spinner-clipper", "spinner-clipper--left")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner--patch")}>
                <div className={cx("spinner-circle")} />
              </div>
              <div className={cx("spinner-clipper", "spinner-clipper--right")}>
                <div className={cx("spinner-circle")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Loading;