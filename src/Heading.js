import React from "react";
import hotel from "./image/hotel.png";

const Heading = () => {
  return (
    <div>
      <header className="App-header" />
      <img className="hotel" src={hotel} />
      <span className="hoteltitle">CYF Hotel</span>
    </div>
  );
};

export default Heading;
