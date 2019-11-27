import React from "react";
import Person from "./Person";
import AddPerson from "./AddPerson";
class Root extends React.Component {
  state = {
    persons: [
      { name: "Lalit", age: "30", id: "1" },
      { name: "Monika", age: "26", id: "2" },
      { name: "Shyam", age: "20", id: "3" }
    ]
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome, All</h1>
        <AddPerson />
        <Person persons={this.state.persons} />
      </div>
    );
  }
}

export default Root;
