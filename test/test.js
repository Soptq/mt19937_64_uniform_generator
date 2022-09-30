'use strict';

const assert = require('assert');

const Mt19937 = require('../');

describe('generate random', function() {
  it('should generate via 2333', function() {
    const mt = new Mt19937(0);

    const ret = [
      '28e837c5cb41dc3e',
      'fdfd3a7c3e40f98b',
      '0a213217f032e8b9',
      '98f56903cee3fcee',
    ];

    for (let i = 0; i < 4; i++) {
      assert.strictEqual(ret[i], mt.next());
    }
  });
});
