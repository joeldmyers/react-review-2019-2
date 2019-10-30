import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>First Dom Content</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
