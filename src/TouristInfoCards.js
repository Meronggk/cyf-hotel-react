import React from "react";
import london from "./image/london.jpg";
import manchester from "./image/manchester.jpg";
import glasgow from "./image/glasgow.jpg";

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <h3>London</h3>
          <img src={london} />
          <p>
            London, the capital the United Kingdom, is city with history
            stretching back to Roman times.{" "}
          </p>

          <a
            href="https://en.wikipedia.org/wiki/London"
            className="btn btn-primary"
          >
            Readmore
          </a>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Manchester</h3>
          <img src={manchester} />
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage.{" "}
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Manchester"
            className="btn btn-primary"
          >
            Readmore
          </a>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Glasgow</h3>
          <img src={glasgow} />
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Glasgow"
            className="btn btn-primary"
          >
            Readmore
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
