const test = require('tape');
const timekeeper = require('timekeeper');
const moment = require('moment');
const calculateIncomeTax = require('./calculate-income-tax');

test('income tax', assert => {
  assert.plan(1);

  assert.equal(calculateIncomeTax(30000), 6000);
});
