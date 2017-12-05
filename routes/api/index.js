const router = require("express").Router();
const classRoutes = require("./classes");

// CLass routes
router.use("/classes", classRoutes);

module.exports = router;
