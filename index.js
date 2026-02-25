const express = require("express");
const app = express();
// path needed to define path on server (doesn't understand absolute "./" syntax)
const path = require("path");

app.get("/", (req, res) => {
  // need __dirname for absolute path
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  // need __dirname for absolute path
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  // need __dirname for absolute path
  res.sendFile(path.join(__dirname, "contact-me.html"));
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App listening on port ${PORT}`);
});
