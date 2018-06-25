'use strict';

const {BOOLEAN, INTEGER} = require('sequelize');

module.exports = db => db.define('run', {
  group: INTEGER,
  quantity: INTEGER,
  length: INTEGER,
  runWattage: INTEGER,
  totalWattage: INTEGER,
  trimmable: BOOLEAN,
  symmetrical: BOOLEAN
});
