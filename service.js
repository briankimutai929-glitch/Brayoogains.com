const express = require("express");
const auth = require("../middleware/auth");
const controller = require("../controllers/serviceController");

const router = express.Router();

router.get("/", auth, controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;