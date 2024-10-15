

const express = require("express");


const { createUser, getAllUsers, getSingleUser, deleteUser } = require("./controller/user.controller");

const app = express();

//global middleware to allow json data
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Welcome to the homepage!" });
});


//create a new user 
app.post("/users", createUser);


//get all users from database
app.get("/users", getAllUsers);


//get a single user from database
app.get("/users/:id", getSingleUser);


//Delete a single user in the database
app.delete("/users/:id", deleteUser);






module.exports = app;  