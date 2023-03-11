const { check } = require("express-validator");

const validateHeartRateMetricsPayload = [
  check("clinical_data.HEART_RATE.data")
    .notEmpty()
    .withMessage("Invalid/Unprocessable payload"),
];

module.exports = {
  validateHeartRateMetricsPayload,
};
