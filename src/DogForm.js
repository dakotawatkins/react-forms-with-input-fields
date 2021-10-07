import React, { useState } from "react";

function DogForm() {
  //create useStates and initialize name, breed, age to empty string "".
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  //create handles for name, breed, age; that handles a change in the target value (user input)
  const handleNameChange = (event) => setName(event.target.value);
  const handleBreedChange = (event) => setBreed(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  //create handle to log name, breed, age once submitted, alse clears to empty string "".
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, breed, age);
    
    setName("");
    setBreed("");
    setAge("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="breed">Breed:
        <input
          id="breed"
          type="text"
          name="breed"
          onChange={handleBreedChange}
          value={breed}
        />
      </label>
      <label htmlFor="age">Age:
        <input
          id="age"
          type="text"
          name="age"
          onChange={handleAgeChange}
          value={age}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default DogForm;
