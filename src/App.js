import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
// import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";
// import SearchButton from "./SearchButton";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
