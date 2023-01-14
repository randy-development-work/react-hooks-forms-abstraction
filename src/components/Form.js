import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
  });
  

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      // initial state is an object so...
      // spread operator copies object from current version of formData object into the new state.
      ...formData,
      // overwriting lastName key with new value
      lastName: event.target.value,
    });
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={formData.firstName} />
      <input type="text" onChange={handleLastNameChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
