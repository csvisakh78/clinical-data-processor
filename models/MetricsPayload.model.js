module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "MetricsPayload",
    {
      patientId: Sequelize.STRING,
      orgId: Sequelize.STRING,
      payload: Sequelize.JSON,
      payloadTimestamp: Sequelize.DATE,
    },
    {
      tableName: "metrics_payload",
      timestamps: true,
      underscored: true,
    }
  );
};
