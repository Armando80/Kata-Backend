const express = require('express');
const router = express.Router();

const { UserController, RentalController } = require('../controllers');

router.post('/users', UserController.create);
router.get('/users', UserController.findAll);
router.get('/users/:idUser', UserController.findOneById);
router.patch('/users/:idUser', UserController.updateOneById);

module.exports = router;