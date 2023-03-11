const moment = require("moment");
const { MetricsPayload } = require("../models");
const { validationResult } = require("express-validator");

/**
 * Process the payload from patient device and calculate heart rate for 15 mins interval
 * @param {*} req
 * @param {*} res
 * @returns
 */
const processHeartRatePayload = async (req, res) => {
  try {
    // validate payload is in expected format
    const errors = validationResult(req).array();
    if (errors && errors.length) {
      throw errors;
    }
    const payload = req.body;
    const heartRates = payload.clinical_data.HEART_RATE.data || [];

    const groupedData = heartRates.reduce((groupedObj, hearRate) => {
      const { on_date: onDate } = hearRate;
      const measurement = parseInt(hearRate.measurement);
      const dateObj = moment(onDate).utc();

      /**
       * identify the nearest 15 minutes iterval of that date ie 0, 15, 30, or 45
       * and generate a groupKey based on that interval of the date
       */
      const roundedMinutes = Math.floor(dateObj.minutes() / 15) * 15;
      const groupKey = dateObj.minute(roundedMinutes).startOf("minute").unix();

      // if groupkey not exist, set current data as default
      if (!groupedObj.hasOwnProperty(groupKey)) {
        groupedObj[groupKey] = {
          from_date: onDate,
          to_date: onDate,
          measurement: {
            low: measurement,
            high: measurement,
          },
        };
        return groupedObj;
      }

      // handle and process even if data arrives not in the datetime order
      if (onDate < groupedObj[groupKey].from_date) {
        groupedObj[groupKey].from_date = onDate;
      } else if (onDate > groupedObj[groupKey].to_date) {
        groupedObj[groupKey].to_date = onDate;
      }

      // validate previously calculated low/high measurement for this 15 min slot and update if needed
      if (measurement < groupedObj[groupKey].measurement.low) {
        groupedObj[groupKey].measurement.low = measurement;
      } else if (measurement > groupedObj[groupKey].measurement.high) {
        groupedObj[groupKey].measurement.high = measurement;
      }
      return groupedObj;
    }, {});

    // insert payload data to db
    await MetricsPayload.create({
      payload,
      patientId: payload.patient_id,
      orgId: payload.orgId,
      payloadTimestamp: payload.timestamp,
    });

    res.json({
      succes: true,
      processedData: Object.values(groupedData),
      rawData: payload.clinical_data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err?.message,
      rawError: err,
    });
  }
};

module.exports = {
  processHeartRatePayload,
};
