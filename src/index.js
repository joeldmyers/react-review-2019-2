import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <p>First Dom Content</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-root"));