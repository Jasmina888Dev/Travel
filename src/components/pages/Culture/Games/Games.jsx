import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";

const Games = () => {
  const { culture } = useContext(TravelContext);

  const games = culture.find((el) => el.id === 10 || 11 || 12);
  return (
    <div id="games">
      <div className="container">
        <div className="games">
          <div
            className="games--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Games</h1>
            <p>
              Since ancient times, the Kyrgyz have given a great place to folk
              games and <br /> entertainment, not a single folk festival took
              place without them. <br /> Traditional equestrian games remain the
              most beloved and revered.
            </p>
          </div>
          <div className="games--block2">
            <div className="games--block2__text">
              <img src={games?.image} alt="img" />
              <p>
                <span>{games?.culture_name}</span> <br /> <br />{" "}
                {games?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
