'use strict';

const Sequelize = require('sequelize');

module.exports = db => db.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  role: Sequelize.STRING
});
