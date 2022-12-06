import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
    </div>
  );
};

export default App;
