// node readData.js to run
const fs = require("fs");

// Read the content of users.json file
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    // Handle error if file cannot be read
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON string into a JavaScript array
    const users = JSON.parse(data);

    console.log("--- All Users ---");
    // Loop through the users array and display details
    users.forEach((user) => {
      console.log(
        `FirstName: ${user.firstName}, LastName: ${user.lastName}, Email: ${user.email}, Age: ${user.age}`
      );
    });
  } catch (parseErr) {
    // Handle error if JSON data is invalid
    console.error("Error parsing JSON:", parseErr);
  }
});
