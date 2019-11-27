import React from "react";

class Person extends React.Component {
  render() {
    console.log(this.props);
    const { persons } = this.props;
    const personList = persons.map((person, index) => {
      console.log(`${index}_${person.id}`);
      return (
        <div className="row" key={`${index}_${person.id}`}>
          <div>My name is {person.name}</div>
          <div>My age is {person.age}</div>
        </div>
      );
    });
    return <div>{personList}</div>;
  }
}
export default Person;
