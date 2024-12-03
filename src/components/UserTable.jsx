import React from "react";
import UserRow from "./UserRow";
import EmptyMessage from "./EmptyMessage";

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <section className="table-section">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>User Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onEditUser={onEditUser}
                onDeleteUser={onDeleteUser}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <EmptyMessage />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default UserTable;
