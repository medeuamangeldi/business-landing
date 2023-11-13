import React from 'react';
import { Button, Flex } from 'antd';

const Register = () => {
  const boxStyle = {
    width: '100%',
    height: 120,
  };
  return (<div className="App">
    <Flex style={boxStyle} justify='center' align='center'>
      <Button type="primary">Register page</Button>
    </Flex>
  </div>)
};

export default Register;
