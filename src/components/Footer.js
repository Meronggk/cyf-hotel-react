import React from "react";

const Footer = ({ data }) => {
  return (
    <ul className="footer">
      {data.map((item, index) => {
        return (
          <li key={index} style={{ listStyle: "none" }}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Footer;
