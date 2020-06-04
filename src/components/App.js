import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigContainer from './PigContainer'

class App extends Component {

  state = {
    pigs: [hogs]
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        <PigContainer pigs={this.state.pigs} />

      </div>
    );
  }
}

export default App;
