const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

router.post('/user', UserController.create);
router.get('/user', (req, res) => res.status(200).json({ users: [] }));

module.exports = router;