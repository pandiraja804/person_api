//* routes/auth.js
const express = require('express');
const { createUser, updateUser, listUser, readUser, deleteUserById } = require('../controllers/user.controller');

const router = express.Router();
const Validator = require('../middlewares/validator.middleware');

router.post('/user', Validator('userCreate'), createUser);
router.patch('/user/:userId', Validator('userUpdate'), updateUser);
router.get('/user/:userId', readUser);
router.get('/user', listUser);
router.delete('/user/:userId', deleteUserById);

module.exports = router;
