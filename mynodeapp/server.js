const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "MyNodeApp";

app.get("/", (req, res) => {
  res.send(`<h1>Hello from ${APP_NAME} Docker image (version 2.0)!</h1>`);
});

app.get("/about", (req, res) => {
  res.send("<h2>This is a simple Express app running in Docker</h2>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});