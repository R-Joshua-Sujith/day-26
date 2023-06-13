import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { data } from "../App";
import Nav from "../components/Nav";
import { useContext } from "react";
import "../styles/EditUser.css";
const EditUser = () => {
  const { users } = useContext(data);
  const { id } = useParams();
  const userProfile = users.filter((user) => {
    return user.id === id;
  });

  const [iD, setId] = useState(userProfile[0].id);
  const [name, setName] = useState(userProfile[0].name);

  const [email, setEmail] = useState(userProfile[0].email);

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Nav />
      <h1 className="headingg">Edit User</h1>
      <div className="addForm">
        <div className="subForm">
          <input
            type="text"
            placeholder="Enter ID"
            value={iD}
            onChange={idHandler}
          />
          <input
            type="text"
            placeholder="Enter User Name"
            value={name}
            onChange={nameHandler}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailHandler}
          />

          <div
            className="buttonn"
            onClick={() => {
              if (iD == "" || name == "" || email == "") {
                alert("Please Fill all the fields");
              } else {
                const index = users.findIndex(
                  (user) => user.id === userProfile[0].id
                );

                const obj = {
                  id: iD,
                  name: name,
                  email: email,
                };
                users[index] = obj;
                alert("Data saved successfully");
              }
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
