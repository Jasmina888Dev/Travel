import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import { TravelContext } from "../../../context/context";

const Instrument = () => {
  const { culture } = useContext(TravelContext);
  const instrument = culture.find((el) => el.id === 4);
  return (
    <div id="instrument">
      <div className="container">
        <div className="instrument">
          <div
            className="instrument--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>
              National <br /> instruments
            </h1>
            <p>
              Kyrgyz music is notable for being in tune with nature and life in{" "}
              <br />
              the mountains. The texts of many songs tell about the everyday{" "}
              <br />
              life of nomads, and even in compositions where there are no <br />{" "}
              words, the corresponding mood is subtly conveyed. There are <br />{" "}
              many musical instruments in Kyrgyzstan.
            </p>
          </div>
          <div className="instrument--block2">
            <div className="instrument--block2__text">
              <img
                src="https://static.vecteezy.com/system/resources/previews/035/199/224/non_2x/ai-generated-blue-flower-isolated-on-transparent-background-free-png.png"
                alt="img"
              />
              <p>
                <span>{instrument?.culture_name}</span> <br /> <br />
                {instrument?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instrument;
