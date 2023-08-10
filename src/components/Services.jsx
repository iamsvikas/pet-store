import { styled } from "styled-components";
import Service from "./Service";

const OuterContainer = styled.div`
  /* background-color: #fcffed; */
  padding: 20px;
  margin: 20px 0;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.h5`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-size: 24px;
  text-decoration: underline;
`;
const Services = () => {
  return (
    <OuterContainer>
      <Title>Our Services</Title>
      <Container>
        <Service />
      </Container>
    </OuterContainer>
  );
};

export default Services;
