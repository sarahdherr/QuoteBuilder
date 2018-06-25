'use strict';

const {STRING} = require('sequelize');

module.exports = db => db.define('fixture', {
  partNumber: STRING,
  prefix: STRING,
  channel: STRING,
  lens: STRING,
  intensity: STRING,
  cct: STRING,
  dimming: STRING,
  oneDriver: STRING
});
