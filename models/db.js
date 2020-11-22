const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/culinaryWorld', { logging: false });

module.exports = db;
