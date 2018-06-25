'use strict';

const Sequelize = require('sequelize');

module.exports = db => db.define('job', {
  timestamp: Sequelize.TIME,
  status: Sequelize.STRING,
});
