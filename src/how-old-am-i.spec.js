const test = require('tape');
const timekeeper = require('timekeeper');
const moment = require('moment');
const howOldAmI = require('./how-old-am-i');

test('that i am 33', assert => {
  assert.plan(1);

  timekeeper.freeze(moment.utc('2003-06-14').toDate());

  assert.equal(howOldAmI('1985-06-14'), 18, 'i should be 18');

  timekeeper.reset();
});
