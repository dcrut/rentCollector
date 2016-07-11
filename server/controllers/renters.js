/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */

import express from 'express';
import Renter from '../models/renter';
import bodyValidator from '../validators/renter/body';
// import queryValidator from '../validators/apartments/query';
// import paramsValidator from '../validators/apartments/params';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Renter.find()
      .exec((err, renters) => {
        res.send({ renters });
      });
});

// create
router.post('/', bodyValidator, (req, res) => {
  Renter.create(res.locals, (err, renter) => {
    console.log('new renter', res.locals);
    res.send({ renter });
  });
});
