require("dotenv/config");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const db = require("./models");
const indexRouter = require("./routes/index");

// sync model tables to db
db.sequelize.sync({
  logging: false,
});

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use("/api", indexRouter);

module.exports = app;
