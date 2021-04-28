const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get('/', (req, res) => {
    res.send('data');
})

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});