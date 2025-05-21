// Write a function called createUserManager that returns an object to manage users. The object should have the following functionalities:

// Add a user: Accept an object with properties id (number), name (string), and age (number). Store these users in an internal array.
// Get users sorted by age: Return all users sorted by age in ascending order.
// Find users by name: Accept a name and return all users with that name (case-insensitive).
// Remove a user by ID: Accept an ID and remove the user with that ID from the array.

const createUserManager = function (input) {
  const objects = [];
  if (typeof input === "object") {
    objects.push(input);
  }
  if (typeof input === "string") {
    return objects.filter((object) => object.name[0] === input[0]);
  }
  return objects.sort((a, b) => a.age - b.age);
};
