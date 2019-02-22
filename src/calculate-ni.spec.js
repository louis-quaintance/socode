const test = require('tape');
const timekeeper = require('timekeeper');
const moment = require('moment');
const calculateNI = require('./calculate-ni');

test('calculate ni', assert => {
  assert.plan(1);

  assert.equal(calculateNI(30000), 3000);
});
