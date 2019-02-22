const test = require('tape');
const proxyquire = require('proxyquire').noCallThru();

test('tax manager', assert => {
  assert.plan(1);

  const taxManager = proxyquire('./tax-manager', {
    './calculate-ni': () => 500,
    './calculate-income-tax': () => 200,
  });

  assert.equal(taxManager(10000), 700);
});
