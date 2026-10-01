export function filterUsers(users, search, role) {
  return users.filter((user) => {
    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      role === "All" || user.role === role;

    return matchesSearch && matchesRole;
  });
}