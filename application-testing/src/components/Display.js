import React from "react";
import Dashboard from "./Dashboard";

const Display = props => {
  const { hit, ball, foul, strike } = props.state;
  console.log(props);
  return (
    <div className="container">
      <section className="balls-strikes">
        <div className="topRow">
          <div className="home">
            <h2 className="home_name">At Bat</h2>
            <div className="strikes">{strike}</div>
            <div className="balls">{ball}</div>
            <div className="hits">{hit}</div>
            <div className="fouls">{foul}</div>
            <Dashboard hitCounter={props.hitCounter} foulCounter={props.foulCounter} ballCounter={props.ballCounter} strikeCounter={props.strikeCounter} state={props.state} />
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Display;
