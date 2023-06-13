import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";
import { useContext } from "react";
import { data } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const [userCount, setCount] = useState("");
  const { users } = useContext(data);
  const navigate = useNavigate();

  useEffect(() => {
    setCount(users.length);
  }, []);
  return (
    <div>
      <Nav />
      <div className="Users">
        <div>
          <p>Total Users {userCount}</p>
          <img src="user.png" />
        </div>
      </div>
      <Link className="add-user" to="/create-user">
        +
      </Link>
    </div>
  );
};

export default Home;
