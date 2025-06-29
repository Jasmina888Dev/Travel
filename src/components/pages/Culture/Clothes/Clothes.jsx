import React from "react";
import culturePage from "../../../../assets/images/cultureImg.png";

const Clothes = () => {
  return (
    <div id="clothes">
      <div className="container">
        <div className="clothes">
          <div
            className="clothes--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>National clothes</h1>
            <p>
              The nomadic way of life is reflected in the Kyrgyz clothes, <br />{" "}
              the features of various regions are visible. Natural <br />{" "}
              materials prevail: wool, felt, leather, coarse fabrics. The <br />{" "}
              design uses ornaments and themes inspired by nature <br /> and
              tribal traditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
