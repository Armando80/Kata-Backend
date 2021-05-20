const express = require('express');
const router = express.Router();
const UserContoller = require('../controllers/UserController');

router.post('/users', UserContoller.create);

router.get('/users', UserContoller.findAll);

module.exports = router;
