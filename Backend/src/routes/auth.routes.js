const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");


router.post("/register", registerController);  // register user

router.post("/login", loginController);       // login user




module.exports = router;
