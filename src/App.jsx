import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Booking from "./pages/Booking";
import Layout from "./components/Layout";
import BookingList from "./pages/BookingList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-list" element={<BookingList />} />
      </Route>
    </Routes>
  );
}

export default App;
