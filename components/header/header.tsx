import { Button, Flex } from "antd";

export default function Header() {
    const groupStyle = {
        paddingTop: 50,
        paddingBottom: 400,
        backgroundColor: '#ECF9FF',
    }

    const boxStyle = {
        width: '81.25%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
      };

    return (
        <Flex gap="middle" align="center" vertical style={groupStyle}>
          <Flex style={boxStyle} justify='space-between' align='center'>
            <h1>Bizpro</h1>
            <h2>Home Services About Us Contact</h2>
            <div>
            <Button type="default">Sign in</Button>
            <Button type="default">Free Trial</Button>
            </div>
          </Flex>
        </Flex>
      );
}