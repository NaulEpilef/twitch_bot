const Sequelize = require("sequelize");

const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASS = process.env.PASS;
const DIALECT = process.env.DIALECT;
const HOST = process.env.HOST;

const sequelize = new Sequelize(DATABASE, USER, PASS, {
  dialect: DIALECT,
  host: HOST,
});

module.exports = sequelize;
