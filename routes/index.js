const express = require("express");

const heartRateRouter = require("./heart_rate");

const router = express.Router();

router.use("/heartRate", heartRateRouter);

module.exports = router;
