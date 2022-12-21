const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
mongoose.set("strictQuery", true);

app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save().then(() => res.json(`User added ${req.body.username}`));
});
app.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      if (user.password === req.body.password) {
        res.json(true);
      } else {
        res.json(false);
      }
    } else res.json(false);
  });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
