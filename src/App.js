import React from "react";

class App extends React.Component {
  state = {
    name: "Lalit",
    age: 30
  };
  handleClick = e => {
    // console.log(e.target);
    console.log(this.state);
    this.setState({
      name: "Shyam",
      age: 28
    });
  };
  handleMouseOver = e => {
    console.log(this.state);
    console.log(e.target, e.pageX);
  };
  handleCopy = e => {
    console.log("Try being original once!");
  };
  render() {
    return (
      <div className="container">
        <h1>Hey, Friends</h1>
        <p>
          My name is {this.state.name}. I am {this.state.age}
        </p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>Hover Me</button>
        <p onCopy={this.handleCopy}>What we think, we become</p>
      </div>
    );
  }
}
export default App;
