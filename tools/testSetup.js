// Written in ES5 since it's not transpiled by Babel.

/* eslint-disable no-var*/

process.env.NODE_ENV = 'test';

require('babel-register')();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.jpg'] = function () {
  return null;
};

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('', { url: "https://localhost/"})).window;
global.document = document;
global.window = document.defaultView;

var exposedProperties = ['window', 'navigator', 'document'];

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
