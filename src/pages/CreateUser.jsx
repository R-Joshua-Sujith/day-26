import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { data } from "../App";
import "../styles/CreateUser.css";
import Nav from "../components/Nav";
const CreateUser = () => {
  const { users } = useContext(data);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = () => {
    if (id == "" || name == "" || email == "") {
      alert("Please Fill all the fields");
    } else {
      const obj = {
        id: id,
        name: name,

        email: email,
      };

      users.push(obj);

      alert(`user "${name}" added successfully`);
      setId("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="headingg">Create User</h1>
      <div className="addForm">
        <div className="subForm">
          <input
            className="inputField"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={idHandler}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Enter User Name"
            value={name}
            onChange={nameHandler}
          />

          <input
            className="inputField"
            type="email"
            placeholder="Enter Email"
            onChange={emailHandler}
            value={email}
          />

          <div className="button" onClick={submitHandler}>
            Add User
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
