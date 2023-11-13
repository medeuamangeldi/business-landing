import React from 'react';
import { Button, Flex } from 'antd';

const Home = () => {
  const boxStyle = {
    width: '100%',
    height: 120,
  };
  return (<div className="App">
    <Flex style={boxStyle} justify='center' align='center'>
      <h1>landing page</h1>
    </Flex>
  </div>)
};

export default Home;
