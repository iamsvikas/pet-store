import { styled } from "styled-components";
import { categories } from "../../data";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  margin-top: 20px;
  border: 0.5px solid Black;
  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1);
  }
`;
const CategoryItem = () =>
  categories.map((item) => (
    <Container key={item.id}>
      <img src={item.img} />
      <div>
        <h3>{item.title}</h3>
        <Button>ADD TO CART</Button>
      </div>
    </Container>
  ));

export default CategoryItem;
