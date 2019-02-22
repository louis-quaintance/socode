const express = require('express');
const taxManager = require('./tax-manager');

const app = express();

app.get('/calculate-tax', (req, res, next) => {
  res
    .json({
      tax: taxManager(req.query.grossIncome),
    })
    .end();
});

module.exports = app;
