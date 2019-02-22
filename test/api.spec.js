const test = require('tape');
const supertest = require('supertest');
const server = require('../src/server');

test('our api', async assert => {
  assert.plan(1);

  const response = await supertest(server)
    .get('/calculate-tax')
    .query({
      grossIncome: 10000,
    });

  assert.deepEqual(response.body, {
    tax: 3000,
  });
});
