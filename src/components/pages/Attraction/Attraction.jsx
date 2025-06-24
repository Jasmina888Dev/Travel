import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const Attraction = () => {
  const [attraction, setAttraction] = useState([]);

  async function addAttraction() {
    let res = await axios(`http://13.60.97.160/en/home/attraction/`);
    let { data } = res;
    setAttraction(data);
  }
  console.log(attraction, "999");

  useEffect(() => {
    addAttraction();
  }, []);

  return (
    <div id="attraction">
      <div className="container">
        <div className="attraction">
          <div className="attraction--cards">
            <h1>Attractions</h1>
            <div className="attraction--cards__block">
              {attraction.slice(0, 6).map((el) => (
                <div className="attraction--cards__block--card">
                  <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/heart-alt-1.png"
                    alt="heart"
                    className="heart"
                  />
                  <img src={el.image1} alt={el.title} width={350} />
                  <h2>{el.title}</h2>
                  <p>{el.description.slice(0, 270)}</p>
                  <a>
                    <FaArrowRightLong />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attraction;