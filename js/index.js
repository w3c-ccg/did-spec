'use strict';

const constants = require('./constants');
const fs = require('fs');
const path = require('path');

exports.constants = constants;
const contexts = exports.contexts = new Map();

function _read(_path) {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, _path),
      {encoding: 'utf8'}));
}

contexts.set(
  constants.DID_CONTEXT_URL,
  _read('../contexts/did-v0.11.jsonld'));
