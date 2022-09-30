'use strict';

const rand = require('./wrapper');

class Mt19937 {
  constructor(seed) {
    seed = seed || 0;

    this.destroyed = false;
    Object.defineProperty(this, 'generator', {
      enumerable: false,
      writable: false,
      configurable: false,
      value: rand.createRand(0x00000000, 0x00000000, 0xffffffff, 0xffffffff, seed),
    });
  }

  next() {
    if (this.destroyed) {
      throw new Error('This generator was destroyed.');
    }
    return rand.generate(this.generator);
  }

  destroy() {
    if (this.destroyed) return;
    rand.freeRand(this.generator);
    this.destroyed = true;
  }
}

module.exports = Mt19937;
