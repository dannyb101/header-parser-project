const express = require("express");
const router = express.Router();
const getHeaders = require("../controllers/tasks");

router.route("/api/whoami").get(getHeaders);

module.exports = router;
