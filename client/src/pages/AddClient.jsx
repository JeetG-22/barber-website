import React, { useState } from "react";
import axios from "axios";

export const AddClient = () => {
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/post-client-info", {
        firstName: clientFirstName,
        lastName: clientLastName,
        number: clientNumber,
        email: clientEmail,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Add Client</h1>
      <label>First Name:</label>
      <input
        type="text"
        value={clientFirstName}
        onChange={(e) => setClientFirstName(e.target.value)}
      />
      <br /> <br />
      <label>Last Name:</label>
      <input
        type="text"
        value={clientLastName}
        onChange={(e) => setClientLastName(e.target.value)}
      />{" "}
      <br /> <br />
      <label>Phone Number:</label>
      <input
        type="text"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
      />{" "}
      <br /> <br />
      <label>Email:</label>
      <input
        type="text"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
