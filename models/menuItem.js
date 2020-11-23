const Sequelize = require('sequelize');
const db = require('./db');

const MenuItem = db.define('menuItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  calories: {
      type: Sequelize.INTEGER
  },
  isSpicy: {
      type: Sequelize.BOOLEAN
  }
});

module.exports = MenuItem;
