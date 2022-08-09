import React, { useEffect } from 'react';
import ScoreBoard from '../components/atoms/ScoreBoard';
import WalkBoard from '../components/atoms/WalkBoard';
import Card from '../components/atoms/Card';

import { useSelector, useDispatch } from 'react-redux';
import { USER_REQUEST } from '../reducers/user';
const Main = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: USER_REQUEST
    })
  }, [dispatch]); 
  
  console.log('??D?WQ?D', list)
  return (
    <>
      <ScoreBoard/>
      <WalkBoard/>
      {list}
      {/* {list.map((item, index) => {
        return <Card cardInfo={item} key={index}/>
      })} */}
    </>
  );
};

export default Main;