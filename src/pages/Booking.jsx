import { styled } from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: auto;
`;
const Label = styled.label``;
const Field = styled.div`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 60px;
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
const Form = styled.form`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
const Span = styled.span`
  display: inline-block;
  margin-right: 10px;
`;
const Booking = () => {
  // ========= to disable future date =============
  const today = new Date();
  const toDate =
    today.getDate() >= 10 ? today.getDate() : "0" + today.getDate();
  const toMonth =
    today.getMonth() + 1 >= 10
      ? today.getMonth() + 1
      : "0" + (today.getMonth() + 1);
  const toYear = today.getFullYear();
  const formattedDate = toYear + "-" + toMonth + "-" + toDate;

  // ==============================================
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const bookingHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "pet-store"), { ...data });
      navigate("/booking-list");
    } catch (err) {
      // err
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Book Your Slot</Title>
        <Form onSubmit={bookingHandler}>
          <Field>
            <Label htmlFor="userName">Name</Label>
            <Input
              type="text"
              placeholder="Your Name"
              id="userName"
              onChange={handleInputChange}
              name="name"
              required
            />
          </Field>
          <Field>
            <Label htmlFor="userName">Phone no.</Label>
            <Input
              type="tel"
              placeholder="Contact Phone"
              id="phone"
              onChange={handleInputChange}
              name="phone"
              required
            />
          </Field>

          <Field>
            <p>Please select your Pet</p>
            <Span>
              <Input
                type="radio"
                id="cat"
                name="pet"
                value="Cat"
                onChange={handleInputChange}
              />
              <Label htmlFor="cat">Cat</Label>
            </Span>
            <Span>
              <Input
                type="radio"
                id="dog"
                name="pet"
                value="Dog"
                onChange={handleInputChange}
              />
              <Label htmlFor="dog">Dog</Label>
            </Span>
            <Span>
              <Input
                type="radio"
                id="other"
                name="pet"
                value="Other"
                onChange={handleInputChange}
              />
              <Label htmlFor="other">Other</Label>
            </Span>
          </Field>
          <Field>
            <Label htmlFor="selectedDate">Select Date</Label>
            <Input
              type="date"
              id="selectedDate"
              min={formattedDate}
              onChange={handleInputChange}
              name="date"
            />
          </Field>
          <Field>
            <Label htmlFor="selectedTime">Select Time</Label>
            <Input
              type="time"
              id="selectedTime"
              name="time"
              onChange={handleInputChange}
            />
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Booking;
