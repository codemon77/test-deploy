const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  const htmlFilePath = path.join(__dirname, "public", "index.html");
  console.log("htmlFilePath", htmlFilePath);
  res.sendFile(htmlFilePath);
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

