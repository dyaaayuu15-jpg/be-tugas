const router = require("express").Router();
const admin = require("../controllers/authController");

router.post("/login", admin.login);

module.exports = router;
