import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/login.jpg") center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 60px;
  background-color: rgb(0, 0, 0, 0.1);
  border: 1px solid black;
  border-radius: 15px;
`;
const Title = styled.h5`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  background-color: teal;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.p`
  color: red;
  background-color: #fad7d7;
  height: 20px;
  padding: 5px;
  margin: 5px 0;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  flex: 1;
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Link = styled.span`
  margin: 5px 50px 10px 50px;
  cursor: pointer;
`;

const Login = () => {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        {errorMessage && <Error>{errorMessage}</Error>}
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
          <Link onClick={() => navigate("/signup")}> Create A new Account</Link>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
