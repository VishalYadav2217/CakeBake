import React from "react";
import cake1 from "../Assets/cake1.png";

const Home = () => {
  return (
    <section >
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container" >
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          "There’s nothing better than cake but more cake."
          </h1>
          <p className="primary-text">
          Cake brings joy, celebrates milestones, enhances social 
          gatherings, satisfies sweet cravings, and can be a creative 
          expression through baking.
          </p>
          <button className="secondary-button">
            Taste It
          </button>
        </div>
        <div className="home-image-section">
          <img src={cake1} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
