import React, { useState } from "react";

const ControlsSection = ({ onSearch, onAddUser }) => {
  const [searchText, setSearchText] = useState("");

  const handleAddClick = () => {
    const name = prompt("Enter the user's name:");
    const email = prompt("Enter the user's email:");
    const role = prompt("Enter the user's role:");

    if (name && email && role) {
      onAddUser({ name, email, role });
    } else {
      alert("All fields are required.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <section className="controls-section">
      <input
        type="text"
        placeholder="Search by name or email..."
        className="search-input"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button className="button button-create" onClick={handleAddClick}>
        Add User
      </button>
    </section>
  );
};

export default ControlsSection;
