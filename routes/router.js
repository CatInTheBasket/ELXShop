"use strict"

const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.get("/", Controller.landingPage);
router.get("/login", Controller.login);
router.post("/login", Controller.postLogin);
router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);
router.get("/logout",Controller.logout);

module.exports = router;