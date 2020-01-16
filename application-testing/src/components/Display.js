import React from "react";

const Display = () => {
  return (
    <div className="container">
      <section className="balls-strikes">
        <div className="topRow">
          <div className="home">
            <h2 className="home_name">Home Team</h2>
            <div className="home_strikes">Home Strikes</div>
            <button className="count-button">Strike Count</button>
            <div className="home_balls">Home Balls</div>
            <button className="count-button">Ball Count</button>
          </div>
          <div className="away">
            <h2 className="away_name">Away Team</h2>
            <div className="away_strikes">Away Strikes</div>
            <button className="count-button">Strike Count</button>
            <div className="away_balls">Away Balls</div>
            <button className="count-button">Ball Count</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Display;
