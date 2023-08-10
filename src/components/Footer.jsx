import { styled } from "styled-components";
import { MdFacebook } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  border-top: 1px solid teal;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Left>
        <h1>PET ST🐼RE </h1>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          ullam iure doloribus omnis inventore pariatur, dolore cupiditate
          corporis expedita consequatur fugit quo et nesciunt maiores quia ad
          hic totam error!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <MdFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <BiLogoInstagramAlt />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiFillTwitterCircle />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={() => navigate("/home")}>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Pet Food</ListItem>
          <ListItem onClick={() => navigate("/booking-list")}>
            Customer Bookings
          </ListItem>
          <ListItem>Pet Check-Up</ListItem>
          <ListItem>Pet Care</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Mohali, Punjab
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +91-2323232323
        </ContactItem>
        <ContactItem>
          <GrMail style={{ marginRight: "10px" }} /> Contact@pet.store.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
