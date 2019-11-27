import React from "react";

const Person = ({ persons }) => {
  // const Person = props => {
  // const { persons } = props; //we can directly extract props value in function parameter
  const personList = persons.map((person, index) => {
    // if (person.age > 20) {
    //   return (
    //     <div className="row" key={`${index}_${person.id}`}>
    //       <div>My name is {person.name}</div>
    //       <div>My age is {person.age}</div>
    //     </div>
    //   );
    // } else {
    //   return null;
    // }
    return person.age > 20 ? ( //in place of if statement we can use ternary operator
      <div className="row" key={`${index}_${person.id}`}>
        <div>My name is {person.name}</div>
        <div>My age is {person.age}</div>
      </div>
    ) : null;
  });
  return <div>{personList}</div>;
};
export default Person;
