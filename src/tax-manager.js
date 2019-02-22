const calculateNI = require('./calculate-ni');
const calculateIncomeTax = require('./calculate-income-tax');

module.exports = grossIncome => {
  return calculateNI(grossIncome) + calculateIncomeTax(grossIncome);
};
