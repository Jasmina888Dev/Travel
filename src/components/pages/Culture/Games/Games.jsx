import React from "react";
import culturePage from "../../../../assets/images/cultureImg.png";

const Games = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Games;
