import React, { useState } from "react";
import RestaurantButton from "../components/RestaurantButton";

const Order = ({ orderType }) => {
  const [Orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(Orders + 1);
  };

  return (
    <li>
      {orderType} : {Orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
