const UserRow = ({ user, onEditUser, onDeleteUser }) => {
    const handleEdit = () => {
      const name = prompt("Edit the user's name:", user.name);
      const email = prompt("Edit the user's email:", user.email);
      const role = prompt("Edit the user's role:", user.role);
  
      if (name && email && role) {
        onEditUser({ ...user, name, email, role });
      } else {
        alert("All fields are required.");
      }
    };
  
    const handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this user?")) {
        onDeleteUser(user.id);
      }
    };
  
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <button className="button button-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="button button-delete" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default UserRow;
  