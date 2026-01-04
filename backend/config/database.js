const { Sequelize } = require("sequelize");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: isProd
    ? path.join("/tmp", "database.sqlite") // Writable on Render
    : path.join(__dirname, "database.sqlite"), // Local dev
  logging: false,
});

module.exports = sequelize;
