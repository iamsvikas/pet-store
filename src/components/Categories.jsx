// import { categories } from "../../data";
import { styled } from "styled-components";
import CategoryItem from "./CategoryItem";

const OuterContainer = styled.div`
  /* background-color: #f5fbfd; */

  padding: 20px;
  margin: 20px 0;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;
const Title = styled.h5`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-size: 24px;
  text-decoration: underline;
`;
const Categories = () => {
  return (
    <OuterContainer>
      <Title>Our Products</Title>
      <Container>
        <CategoryItem />
      </Container>
    </OuterContainer>
  );
};

export default Categories;
