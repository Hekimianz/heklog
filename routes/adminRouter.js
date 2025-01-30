const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.getDashboard);

router.get("/670222/login", adminController.getLogin);

router.post("/670222/login", adminController.login);

module.exports = router;
