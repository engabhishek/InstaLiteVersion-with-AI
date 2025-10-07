const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// create user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await userModel.findOne({
    username,
  });
  if (existingUser) {
    return res.status(409).json({
      message: "username already exists",
    });
  }

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY
  );

  res.cookie("token", token)

  res.status(201).json({
    message: "user created or register successfully..",
    user,
  });
});
// router.post("/login")
// router.get("/user") //protected

module.exports = router;
