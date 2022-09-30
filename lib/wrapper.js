'use strict';

const _rand = require('../dist/19937');

const i32ToU32Offset = 2 ** 32;
function convertI32ToU32(signedInt) {
  return signedInt < 0 ? i32ToU32Offset + signedInt : signedInt;
}

module.exports = {
  createRand: _rand._CreateRand,
  freeRand: _rand._FreeRand,
  generate: (generator) => {
    const low = convertI32ToU32(_rand._Generate(generator)).toString(16).padStart(8, '0');
    const high = convertI32ToU32(_rand.getTempRet0()).toString(16).padStart(8, '0');
    return `${high}${low}`;
  },
};
