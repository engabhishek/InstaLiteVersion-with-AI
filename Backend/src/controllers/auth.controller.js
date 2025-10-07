const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function registerController(req, res) {
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
  res.cookie("token", token);

  res.status(201).json({
    message: "user created or register successfully..",
    user,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: "username is incect..",
    });
  }

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "increct password..",
    });
  } else {
    res.status(200).json({
      message: "user logedIn Successfully..",
    });
  }
}

module.exports = {
  registerController,
  loginController,
};
