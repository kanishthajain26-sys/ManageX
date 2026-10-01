export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}