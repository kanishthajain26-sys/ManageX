function Filter({ value, onChange }) {
  return (
    <select
      className="filter"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="All">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      <option value="Manager">Manager</option>
    </select>
  );
}

export default Filter;