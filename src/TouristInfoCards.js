import React from "react";
import london from "./image/london.jpg";
import manchester from "./image/manchester.jpg";
import glasgow from "./image/glasgow.jpg";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={london} className="card-img-top" />
        <p>
          London, the capital of England and the United Kingdom, is a
          21st-century city with history stretching back to Roman times.{" "}
        </p>
        <a
          href="https://en.wikipedia.org/wiki/London"
          className="btn btn-primary"
        >
          visitlondon.com
        </a>
      </div>

      <div className="card-body">
        <img src={manchester} className="card-img-top" />
        <p>
          Manchester is a major city in the northwest of England with a rich
          industrial heritage.{" "}
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Manchester"
          className="btn btn-primary"
        >
          visitmanchester.com
        </a>
      </div>

      <div className="card-body">
        <img src={glasgow} className="card-img-top" />
        <p>
          Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Glasgow"
          className="btn btn-primary"
        >
          visitglasgow.com
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
