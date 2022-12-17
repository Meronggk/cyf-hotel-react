import React from "react";

const Table = result => {
  return (
    <div className="table">
      <tbody>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>SurName</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
      </tbody>
    </div>
  );
};

export default Table;
