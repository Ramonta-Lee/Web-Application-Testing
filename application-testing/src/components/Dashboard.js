import React from "react";

const Dashboard = props => {
  console.log(props);

  return (
    <div className="button-container">
      <button onClick={props.strikeCounter} className="count-button">
        strike
      </button>
      <button onClick={props.ballCounter} className="count-button">
        ball
      </button>
      <button onClick={props.hitCounter} className="count-button">
        hit
      </button>
      <button onClick={props.foulCounter} className="count-button">
        foul
      </button>
    </div>
  );
};

export default Dashboard;
