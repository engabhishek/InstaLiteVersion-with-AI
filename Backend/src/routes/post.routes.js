const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

// protected API
router.post("/", 
  authMiddleware, 
  upload.single("image"), 
  creatPostcontroller);

module.exports = router;
