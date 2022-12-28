// import React from "react";
import React, { useState } from "react";

const Restaurant = () => {
  const [Orders, setOrders] = useState(0);
  const incrementOrders = () => {
    setOrders(Orders + 1);
  };

  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>

      <ul>
        <li>
          Pizzas: {Orders}{" "}
          <button className="btn btn-primary" onClick={incrementOrders}>
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
