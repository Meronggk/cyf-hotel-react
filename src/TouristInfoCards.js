import React from "react";
import london from "./image/london.jpg";

const TouristInfoCards = () => {
  return (
    <div className="cities">
      {cardData.map(city => {
        const { id, title, img, desc, link } = city;
        return (
          <div key={id} className="card">
            <img src={london} className="card-img-top" />
            <h2 className="title">{title}</h2>
            <div className="card-body card-para">
              <p>{desc}</p>
              <a href={link} target="_blank" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
