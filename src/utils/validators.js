const Joi = require('joi');

// user create validator
const userCreate = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .required(),
  age: Joi.number().required(),
  phone_number: Joi.number().required(),
  gender: Joi.string().required(),
  address: Joi.string().required(),
});

// user update validator
const userUpdate = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(30),
  age: Joi.number(),
  phone_number: Joi.number(),
  gender: Joi.string(),
  address: Joi.string(),
});

module.exports = {
  userCreate,
  userUpdate,
};
