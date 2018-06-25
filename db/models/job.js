'use strict';

const Sequelize = require('sequelize');

module.exports = db => db.define('job', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  location: Sequelize.STRING,
  company: Sequelize.STRING,
  specifier: Sequelize.STRING
});
