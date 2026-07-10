const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, (req, res) => {
    res.json({
        success: true,
        message: "Profile loaded successfully",
        user: req.user
    });
});

module.exports = router;