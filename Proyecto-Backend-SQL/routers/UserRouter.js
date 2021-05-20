const express = require('express');
const router = express.Router();

const {UserController} = require('../controllers');

router.post('/profile_users', UserController.create);

router.get('/profile_users', UserController.findAll);

module.exports = router;