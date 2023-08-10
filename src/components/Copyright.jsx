import { styled } from "styled-components";
import { FaRegCopyright } from "react-icons/fa";
const Container = styled.div`
  height: 50px;
  width: 99vw;
  background-color: teal;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  overflow: hidden;
`;
const Icon = styled.div`
  margin: 0 5px;
`;
const Copyright = () => {
  return (
    <Container>
      Copyright
      <Icon>
        <FaRegCopyright />
      </Icon>
      {new Date().getFullYear()} by Deep Dive Media
    </Container>
  );
};

export default Copyright;
