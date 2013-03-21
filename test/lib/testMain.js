/**
 * @fileOverview main bdd tests setup
 */
goog.provide('app.test.main');

mocha.setup({
  globals: [
    'fbAsyncInit',
    'liveReload',
    'LiveReload',
    'open'
  ]
});

var expect, assert;
expect = (typeof chai !== 'undefined' && chai !== null ?
  chai.expect : void 0) || require('chai').expect;
assert = (typeof chai !== 'undefined' && chai !== null ?
  chai.assert : void 0) || require('chai').assert;
