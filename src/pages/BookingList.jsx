import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const BookingList = () => {
  const Container = styled.div`
    min-height: 47vh;
    margin: 50px auto;
  `;
  const Title = styled.h3`
    text-align: center;
    margin-bottom: 20px;
    text-decoration: underline;
    font-size: 28px;
  `;
  const Error = styled.p`
    color: red;
    background-color: #fad7d7;
    height: 20px;
    padding: 5px;
    margin: 5px 0;
  `;
  const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    max-height: 80vh;
    margin: auto;
    border: 1px solid #ddd;
  `;
  const Row = styled.tr`
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
    &:hover {
      background-color: #ddd;
    }
  `;
  const TableHeading = styled.th`
    padding: 12px;
    text-align: left;
    background-color: teal;
    font-weight: bold;
    color: white;
  `;
  const TableData = styled.td`
    padding: 12px;
    text-align: left;
  `;
  const NoBooking = styled.p`
    text-align: center;
    font-size: 20px;
  `;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "pet-store"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log("list", list);
      } catch (err) {
        setError("Unable to Fetch the Data!");
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <Container>
      <Title>Customer Booking</Title>
      {error && <Error>{error}</Error>}
      {data.length ? (
        <Table>
          <Row>
            <TableHeading>S. No.</TableHeading>
            <TableHeading>Customer Name</TableHeading>
            <TableHeading>Contact No.</TableHeading>
            <TableHeading>Pet</TableHeading>
            <TableHeading>Slot Date</TableHeading>
            <TableHeading>Slot Time</TableHeading>
          </Row>
          {data.map((td, index) => {
            console.log(td, index);
            return (
              <Row key={td.id}>
                <TableData>{index + 1}</TableData>
                <TableData>{td.name}</TableData>
                <TableData>{td.phone}</TableData>
                <TableData>{td.pet}</TableData>
                <TableData>{td.date}</TableData>
                <TableData>{td.time}</TableData>
              </Row>
            );
          })}
        </Table>
      ) : (
        <NoBooking>No Booking Found!</NoBooking>
      )}
    </Container>
  );
};

export default BookingList;
