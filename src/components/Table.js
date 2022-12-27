import React from "react";
import { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(response => response.json())
      .then(data => {
        // console.log(actualData);
        setData(data);
        // console.log(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
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

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            {/* <td>
              <img src={item.thumbnail} alt="" height={100} />
            </td> */}
            {/* <td>{item.price}</td>
            <td>{item.rating}</td> */}
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default Table;
