import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Bookings from "./components/Bookings";
import "./App.css";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer data={data} />
    </div>
  );
};

export default App;
