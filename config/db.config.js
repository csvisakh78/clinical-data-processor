module.exports = {
  dialect: "postgres",
  database: process.env.POSTGRES_DB_NAME || "clinical_metrics",
  username: process.env.POSTGRES_DB_USER || "postgres",
  password: process.env.POSTGRES_DB_PASSWORD || "postgres",
  host: process.env.POSTGRES_DB_HOST || "localhost",
  define: {
    freezeTableName: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  logging: false,
};
