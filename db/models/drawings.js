'use strict';

const {STRING} = require('sequelize');

module.exports = db => db.define('drawings', {
  url: STRING
});
