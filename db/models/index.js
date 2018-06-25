'use strict'

const User = require('./users');
const Quote = require('./quote');
const Job = require('./job');
const Run = require('./run');
const Fixture = require('./fixture');
const Drawings = require('./drawings');

// Quote.belongsTo(User);
// Quote.belongsTo(Job);

module.exports = { User, Quote, Job, Run, Fixture, Drawings };
