import React from "react";
import Attraction from "../Attraction/Attraction";
import Pagination from "../Pagination/Pagination";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div id="">
      <Welcome />
      <Attraction />
      <Pagination />
    </div>
  );
};

export default Home;
