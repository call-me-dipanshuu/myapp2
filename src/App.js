import "./App.css";
import React from "react";
// function App() {
//   return <div className="App"></div>;
// }
import Name from "./Name";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    // };
    this.state = {
      count: 0,
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  // componentDidMount() {
  //   console.log("Fetched");
  // }
  // componentDidUpdate() {
  //   console.log("Feteched Again");
  // }
  // componentWillUnmount() {
  //   console.log("Unmounting");
  // }
  // shouldComponentUpdate() {
  //   return false;
  // }
  //shouldComponent will avoid the further re-rendering as its value is false
  //if it will be true it will re-render or update
  incrementHandler() {
    this.setState({
      count: 10,
    });
  }

  incrementHandler() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }
  decrementHandler() {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        {/* <p>{this.state.count}</p>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button> */}
        {/* <input
          type={"text"}
          placeholder="Enter Your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>{this.state.name}</p>
        <Name name="Nice" />
        <Name /> */}

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
