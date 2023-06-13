import React, { createContext, useEffect, useState } from "react";
import ListUsers from "./pages/ListUsers";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import Menu from "./pages/Menu";

const data = createContext();

function App() {
  const users = [{
    id: "101",
    name: "User1",
    email: "user1@gmail.com"
  },
  {
    id: "102",
    name: "User2",
    email: "user3@gmail.com"
  },
  {
    id: "103",
    name: "User3",
    email: "user3@gmail.com"
  },
  {
    id: "104",
    name: "User4",
    email: "user4@gmail.com"
  },
  {
    id: "105",
    name: "User5",
    email: "user5@gmail.com"
  },
  {
    id: "106",
    name: "User6",
    email: "user6@gmail.com"
  },
  {
    id: "107",
    name: "User7",
    email: "user7@gmail.com"
  },
  ]


  return (
    <BrowserRouter>
      <data.Provider value={{ users }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </data.Provider>
    </BrowserRouter>



  );
}

export default App;
export { data };