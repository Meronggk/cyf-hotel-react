import React from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import FakeBookings from "../data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [Bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    const newBookings = Bookings.filter(Booking => {
      return (
        Booking.firstName.toLowerCase() === searchVal.toLowerCase ||
        Booking.surname.toLowerCase() === searchVal.toLowerCase
      );
    });
    setBookings(newBookings);

    // console.info("TO DO!", searchVal);
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
