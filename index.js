const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To The ToDo App!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

