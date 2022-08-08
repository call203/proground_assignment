import React from 'react';
import ScoreBoard from '../components/atoms/ScoreBoard';
import WalkBoard from '../components/atoms/WalkBoard';
import Card from '../components/atoms/Card';

const Main = () => {
  return (
    <>
      <ScoreBoard/>
      <WalkBoard/>
      <Card/>
    </>
  );
};

export default Main;