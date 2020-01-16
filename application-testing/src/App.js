import React, { Component } from "react";
import Display from "./components/Display";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      hit: 0,
      foul: 0
    };
  }

  componentDidUpdate() {
    if (this.state.strike === 3) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      });
    }
    if (this.state.ball === 4) {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      });
    }
  }

  strikeCounter = () => {
    this.setState({
      strike: this.state.strike + 1
    });
  };

  ballCounter = () => {
    this.setState({
      ball: this.state.ball + 1
    });
  };

  foulCounter = () => {
    this.setState({
      foul: this.state.foul + 1
    });
  };

  hitCounter = () => {
    this.setState({
      hit: this.state.hit + 1,
      strike: 0,
      ball: 0,
      foul: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Display
          state={this.state}
          strikeCounter={this.strikeCounter}
          ballCounter={this.ballCounter}
          foulCounter={this.foulCounter}
          hitCounter={this.hitCounter}
        />
      </div>
    );
  }
}

export default App;
