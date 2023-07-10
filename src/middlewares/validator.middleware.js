/* eslint-disable consistent-return */
//* middlewares/Validator.js
const createHttpError = require('http-errors');
//* Include all validators
const Validators = require('../utils/validators');
const logger = require('../utils/logger');

module.exports = (validator) => async (req, res, next) => {
  try {
    const validated = await Validators[validator].validateAsync(req.body);
    req.body = validated;
    next();
  } catch (err) {
    //* Pass err to next
    //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
    logger.log(err);
    if (err.isJoi) { return next(createHttpError(422, { message: 'Please check body request' })); }
    next(createHttpError(500));
  }
};