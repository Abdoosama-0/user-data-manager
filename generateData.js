// node generateData.js to run 
const fs = require("fs");

// Sample users array with 5 user objects
const users = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    age: 30,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.j@example.com",
    age: 24,
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.b@example.com",
    age: 28,
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Miller",
    email: "diana.m@example.com",
    age: 35,
  },
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Williams",
    email: "ethan.w@example.com",
    age: 22,
  },
];

// Write the users array into users.json
// JSON.stringify() is used to convert JS array into a JSON string
// "null, 2" makes the JSON file formatted with indentation
fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
  if (err) {
    // Handle errors if writing fails
    console.error("Error writing file:", err);
    return;
  }
  // Success message
  console.log("✅ Sample user data written to users.json");
});
