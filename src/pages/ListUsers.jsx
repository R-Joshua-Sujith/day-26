import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useContext } from "react";
import { data } from "../App";
import "../styles/Students.css";

const Students = () => {
  const { users } = useContext(data);
  const [length, setLength] = useState(users.length);
  useEffect(() => {}, [length]);

  return (
    <div>
      <Nav />
      <h1>User Database</h1>
      <div className="table">
        <input className="tableHeading" value="Student ID" disabled></input>
        <input className="tableHeading" value="Name" disabled></input>
        <input className="tableHeading" value="Class" disabled></input>
        <input className="tableHeading" value="Actions" disabled></input>
        {users.map((user) => {
          return (
            <div>
              <input className="tableHeading" value={user.id} disabled></input>
              <input
                className="tableHeading"
                value={user.name}
                disabled
              ></input>
              <input
                className="tableHeading"
                value={user.email}
                disabled
              ></input>
              <Link className="image" to={`/view-user/${user.id}`}>
                <img className="image" src="view.png" />
              </Link>

              <Link to={`/edit-user/${user.id}`} className="image">
                <img className="image" src="edit.png" />
              </Link>

              <img
                className="image"
                src="delete.png"
                onClick={() => {
                  users.splice(
                    users.findIndex((student) => student.id === user.id),
                    1
                  );
                  setLength(length - 1);
                  alert(`${user.name} deleted`);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Students;
