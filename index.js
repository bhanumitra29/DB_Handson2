const express = require("express");
const route = require("./product_Router");
const app = express();

app.use(express.json());

// Correct usage of the route object and its defined routes
app.use("/api", route); 

const cors = require('cors');
const { connection } = require("./config/db");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(4009, async () => {
  try {
    await connection();
    console.log("The port is running on 4009");
  } catch (err) {
    console.log(err, "Error occurred");
  }
});
