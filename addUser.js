// node addUser.js to run
const fs = require("fs");

// Read the existing users.json file
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON string into a JavaScript array
    const users = JSON.parse(data);

    // Create a new user object
    const newUser = {
      id: users.length + 1, // auto-increment id
      firstName: "Abdo",
      lastName: "Osama",
      email: "abdo.o@example.com",
      age: 27,
    };

    // Add the new user to the users array
    users.push(newUser);

    // Write the updated array back to users.json
    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("✅ New user added successfully!");
    });
  } catch (parseErr) {
    // Handle JSON parsing errors
    console.error("Error parsing JSON:", parseErr);
  }
});
