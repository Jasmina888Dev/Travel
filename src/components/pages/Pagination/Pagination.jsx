import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Pagination() {
  const [slides, setSlides] = useState([]);

  const fetchSlides = async () => {
    try {
      const response = await axios.get("http://13.60.97.160/en/home/culture/");
      setSlides(response.data.results);
    } catch (error) {
      console.error("Маалымат жүктөөдө ката:", error);
    }
  };

  useEffect(() => {
    fetchSlides(); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides?.map((item) => (
          <div key={item.id} className="slide">
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
