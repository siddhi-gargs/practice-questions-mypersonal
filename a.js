const employees = [
  { name: "Alice", age: 30, department: "HR" },
  { name: "Bob", age: 25, department: "Engineering" },
  { name: "Charlie", age: 28, department: "HR" },
  { name: "Diana", age: 32, department: "Engineering" },
];

const sorted = employees.sort((first, second) => {
  if (first.department === second.department) {
    return first.age - second.age;
  }
  return first.department.localeCompare(second.department);
});

const books = [
  { title: "Book A", author: "Author X", rating: 4.5 },
  { title: "Book B", author: "Author Y", rating: 4.0 },
  { title: "Book C", author: "Author Z", rating: 4.5 },
];

const bookSort = books.sort((a, b) => {
  if (a.rating === b.rating) {
    return a.title.localeCompare(b.title);
  }

  return b.rating - a.rating;
});
