import React from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import FakeBookings from "../data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [Bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults Bookings={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;
