import { useState } from "react";
export default function Person() {
    const  [name, setName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [person, setPerson] = useState({ name: "John",lastName: "Doe", age: 100 });
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      setPerson({ ...person, age: person.age + 1 });
      // we've called setPerson, surely person has updated?
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.lastName}</h2>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }
  