import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../firebase";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/signup.jpg") center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 60px;
  background-color: rgb(0, 0, 0, 0.1);
  border: 1px solid black;
  border-radius: 15px;
`;

const Title = styled.h5`
  font-size: 24px;
  font-weight: 300;
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
  padding: 10px;
  margin: 10px 0;
  text-align: center;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Link = styled.div`
  margin: 5px 50px 10px 50px;
  cursor: pointer;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [confirmPasswordInput, setConfirmPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordInput !== confirmPasswordInput) {
      return setErrorMessage("Password don't match!");
    }
    try {
      setErrorMessage("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
      navigate("/");
    } catch {
      setErrorMessage("Failed to create an account!");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        {errorMessage && <Error>{errorMessage}</Error>}
        <Form onSubmit={handleSubmit}>
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
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link onClick={() => navigate("/")}>
            Do you have account already? Sign in instead
          </Link>
          <Button disabled={loading} type="submit">
            Create
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
