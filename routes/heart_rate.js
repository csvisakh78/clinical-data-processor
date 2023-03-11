const express = require("express");
const { heartRateController } = require("../controllers");
const {
  validateHeartRateMetricsPayload,
} = require("../middlewares/heart-rate");

const router = express.Router();

const { processHeartRatePayload } = heartRateController;

/* GET users listing. */
router.post("/", validateHeartRateMetricsPayload, processHeartRatePayload);

module.exports = router;
