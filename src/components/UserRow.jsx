import { memo } from "react";

import { useNavigate } from "react-router-dom";

function UserRow({ user, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{user.id}</td>

      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <button
          onClick={() => navigate(`/users/${user.id}`)}
        >
          View
        </button>

        <button
          onClick={() => onDelete(user.id)}
          className="delete-button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default memo(UserRow);