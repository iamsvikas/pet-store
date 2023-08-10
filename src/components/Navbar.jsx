import { styled } from "styled-components";
import { BsSearch, BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Container = styled.div`
  height: 60px;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid teal;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  width: fit-content;
`;

const Input = styled.input`
  border: none;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  margin-left: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid Black;
  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const signoutHandler = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      //err
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <BsSearch style={{ color: "grey", fontSize: "14px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/home")}>PET ST🐼RE</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Button onClick={() => navigate("/booking")}>Book Now</Button>
          </MenuItem>
          <MenuItem onClick={() => navigate("/booking-list")}>
            Customer Bookings
          </MenuItem>
          <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
          <MenuItem>
            <BsCartPlus />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
