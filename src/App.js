import React, { useState } from "react";
import Header from "./components/Header";
import ControlsSection from "./components/ControlSection";
import UserTable from "./components/UserTable";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Carl Johnson", email: "carl12@gmail.com", role: "User" },
    { id: 2, name: "Trevor Philips", email: "trevorgta@gmail.com", role: "User" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="main-content">
        <ControlsSection onSearch={setSearchQuery} onAddUser={handleAddUser} />
        <UserTable
          users={filteredUsers}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
        />
      </main>
    </div>
  );
};

export default App;
