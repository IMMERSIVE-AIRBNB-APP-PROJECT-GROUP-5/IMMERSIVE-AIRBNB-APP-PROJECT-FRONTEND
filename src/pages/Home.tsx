import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
