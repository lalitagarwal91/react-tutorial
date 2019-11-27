import React from "react";

const Person = ({ persons }) => {
  // const Person = props => {
  // const { persons } = props; //we can directly extract props value in function parameter
  const personList = persons.map((person, index) => {
    return (
      <div className="row" key={`${index}_${person.id}`}>
        <div>My name is {person.name}</div>
        <div>My age is {person.age}</div>
      </div>
    );
  });
  return <div>{personList}</div>;
};
export default Person;
