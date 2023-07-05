import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip with Aria</h1>
          <p className="subTitle">
            Embark on unforgettable journeys with our travel agency as we curate
            extraordinary experiences that awaken your senses and ignite your
            wanderlust.
          </p>

          <button className="btn">Let's Explore</button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Destination" />
          </div>
          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="Meters" />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="100$-500$" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
