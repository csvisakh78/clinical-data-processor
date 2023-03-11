const { Sequelize } = require("sequelize");
const config = require("../config/db.config");
const logger = require("../logger");

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
  })
  .catch((err) => {
    logger.error("DB connection error : ", err);
  });

module.exports = sequelize;
