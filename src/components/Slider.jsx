import { styled } from "styled-components";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    background-color: rgb(0, 128, 128, 0.5);
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid Black;
  &:hover {
    background-color: teal;
    color: white;
    font-weight: 500;
  }
`;
const Slider = () => {
  const [slideindex, setSlideindex] = useState(0);
  const navigate = useNavigate();
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideindex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setSlideindex(slideindex < 2 ? slideindex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleft />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://plus.unsplash.com/premium_photo-1677166331454-b58e2b2355b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
          </ImgContainer>
          <InfoContainer>
            <Title>PET CARE</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              accusamus iusto iste provident, ad ipsa tempora ab odio
              perspiciatis veritatis! Dolore soluta modi eaque debitis quae vel
              quaerat aut provident molestiae
            </Desc>
            <Button onClick={() => navigate("/booking")}>BOOK NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="/images/hero-image-1.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>FOOD FOR PET </Title>
            <Desc>
              Non, fugiat deleniti corporis perspiciatis mollitia iure quisquam,
              natus quam nisi ullam itaque, dolorem dolorum. Explicabo magnam
              cupiditate pariatur saepe dolores nemo dolorem nisi, numquam
              mollitia quae dolorum nihil eveniet recusandae ducimus, soluta
              excepturi!
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="/images/hero-image-2.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>PET STORE</Title>
            <Desc>
              perspiciatis deleniti aspernatur laudantium unde earum saepe esse
              enim amet nostrum ad assumenda incidunt maiores minima aliquam! Ea
              perferendis quas repellat, distinctio beatae minus quo dicta in
              velit explicabo, aspernatur quod consectetur earum, nihil
              voluptate.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDropright />
      </Arrow>
    </Container>
  );
};

export default Slider;
