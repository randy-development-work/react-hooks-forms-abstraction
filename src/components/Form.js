import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    admin: false,
  });
  

  function handleChange(event) {
    // this is dependent on name attributes of <input> matching keys in the state
    // name is the KEY of the formData object we're trying to update

    const name = event.target.name;
    let value = event.target.value;

    // use 'checked' property of checkboxes
    // handling checkbox inputs
    if(event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* giving inputs name attributes to access them as event.target.name */}
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
