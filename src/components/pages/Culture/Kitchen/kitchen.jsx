import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import { TravelContext } from "../../../context/context";

const Kitchen = () => {
  const { culture } = useContext(TravelContext);
  const instrument = culture.find((el) => el.id === 4);
  return (
    <div id="kitchen">
      <div className="container">
        <div className="kitchen">
          <div
            className="kitchen--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Kitchen</h1>
            <p>
              Kyrgyzstan is a country where at the crossroads of the Great Silk
              Road, the <br /> traditional nomadic culture and the sedentary
              culture merged. A distinctive <br /> feature of Kyrgyz dishes is
              that they are all prepared exclusively from fresh <br /> products
              and are rarely stocked up for future use, and the recipes for
              their <br /> preparation, although they seem quite simple, in fact
              contain many <br /> subtleties that are rather difficult to
              master.
            </p>
          </div>
          <div className="kitchen--block2">
            <div className="kitchen--block2__text">
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

export default Kitchen;
