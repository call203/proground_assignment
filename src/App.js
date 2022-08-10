import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './view/Main.js'
import LeaderBoard from './view/LeaderBoard.js'
import styles from './App.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class App extends Component {
  render() {
    return (
      <div className={cx('page-content')}>
        <Routes>
          <Route path="/" exact={true} element={<Main />} />
          <Route path="/board" element={<LeaderBoard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
