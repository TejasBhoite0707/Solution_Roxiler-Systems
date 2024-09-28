const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const fetchAndSaveData = require("./controllers/getData");
const app = express();
const port = 3000;
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

let mongourl = process.env.Mongo_URI;

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
    // Fetch and save data after successful connection
    fetchAndSaveData();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
