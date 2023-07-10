/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const { default: mongoose } = require('mongoose');
const { userModel } = require('../models/user.model');
const logger = require('../utils/logger');

const createUser = async (req, res, next) => {
  logger.log('createUser');
  try {
    const userProp = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body
    };
    const user = await new userModel(userProp).save();
    res.status(201).json({
      data: {
        userId: user._id,
        name: user.name,
        age: user.age,
        gender: user.gender,
        phone_number: user.phone_number,
        address: user.address
      }
    });
  } catch (e) {
    logger.log(e.message);
    res.status(400).json({
      statusCode: 400,
      message: e?.message ?? 'Unable to create user'
    });
  }
};

const updateUser = async (req, res, next) => {
  logger.log('updateUser');
  try {
    const updateUserProp = { ...req.body };
    const user = await userModel
      .findByIdAndUpdate({ _id: req.params.userId }, { $set: updateUserProp }, { returnDocument: 'after' })
      .exec();
    res.status(201).json({
      data: {
        userId: user._id,
        name: user.name,
        age: user.age,
        gender: user.gender,
        phone_number: user.phone_number,
        address: user.address
      }
    });
  } catch (e) {
    logger.log(e.message);
    res.status(400).json({
      statusCode: 400,
      message: e?.message ?? 'Unable to update user'
    });
  }
};

const readUser = async (req, res, next) => {
  logger.log('readUser');
  try {
    const user = await userModel.findById({ _id: req.params.userId }).exec();
    res.status(201).json({
      data: {
        userId: user._id,
        name: user.name,
        age: user.age,
        gender: user.gender,
        phone_number: user.phone_number,
        address: user.address
      }
    });
  } catch (e) {
    logger.log(e.message);
    res.status(404).json({
      statusCode: 404,
      message: e?.message ?? 'User not found'
    });
  }
};

const listUser = async (req, res, next) => {
  logger.log('listUser');
  try {
    const users = await userModel.find({}).exec();
    res.status(201).json({
      data: users
    });
  } catch (e) {
    logger.log(e.message);
    res.status(200).json({
      userDetails: []
    });
  }
};

const deleteUserById = async (req, res, next) => {
  logger.log('deleteUserById');
  try {
    await userModel.findByIdAndDelete({ _id: req.params.userId }).exec();
    res.status(204).json({});
  } catch (e) {
    logger.log(e.message);
    res.status(400).json({
      statusCode: 400,
      message: e?.message ?? 'Unable to delete user, Please try again later'
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  readUser,
  listUser,
  deleteUserById
};
