const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const router = express.Router();
dotenv.config();
const{registerUser,LoginUser} = require('../controller/authController');

router.get("/register",registerUser); 
router.post("/login",LoginUser);

module.exports = router;