import React from 'react';
import { Button, Flex } from 'antd';

const Login = () => {
  const boxStyle = {
    width: '100%',
    height: 120,
  };
  return (<div className="App">
    <Flex style={boxStyle} justify='center' align='center'>
      <Button type="primary">Login page</Button>
    </Flex>
  </div>)
};

export default Login;
