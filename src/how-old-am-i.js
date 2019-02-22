const moment = require('moment');

module.exports = dob => {
  const dateOfBirth = moment.utc(dob, 'YYYY-MM-DD');
  return moment.utc().diff(dateOfBirth, 'years');
};
