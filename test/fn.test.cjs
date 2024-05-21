const { fn } = require('../src/index');
const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('Test group', () => {
    test('return 2', () => {
        const result = fn();
        assert.equal(result, 2);
    });
});
