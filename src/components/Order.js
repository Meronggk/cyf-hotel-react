import React, { useState } from "react";
import RestaurantButton from "../components/RestaurantButton";

const Order = () => {
  const [Orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(Orders + 1);
  };

  return (
    <li>
      Pizzas: {Orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
