'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.DID_CONTEXT_URL,
  require('../contexts/did-v0.11.jsonld'));
