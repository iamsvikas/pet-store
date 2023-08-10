import { styled } from "styled-components";
import { services } from "../../data";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Image = styled.img`
  height: 400px;
  min-width: 300px;
  border-radius: 5%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  border: 0.5px solid Black;

  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1);
  }
`;
const Service = () => {
  const navigate = useNavigate();
  return services.map((item) => (
    <Container key={item.id}>
      <Image src={item.img} />
      <Info>
        <h3>{item.title}</h3>
        <Button onClick={() => navigate("/booking")}>BOOK NOW</Button>
      </Info>
    </Container>
  ));
};

export default Service;
