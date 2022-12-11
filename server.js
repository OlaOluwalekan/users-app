const express = require("express");
const server = express();
const users = require("./routes/users");
const connectDB = require("./database/connnect");
require("dotenv").config();

server.use(express.json());

server.use(express.static("./public"));
// ROUTES
server.use("/users", users);

server.get("/", (req, res) => {
  res.send("hello");
});

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, console.log(`server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
