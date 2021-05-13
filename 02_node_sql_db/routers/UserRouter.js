const express = require('express');
const router = express.Router();

const { UserController, RentalController } = require('../controllers');

// created
router.post('/users', UserController.create);

// read all
router.get('/users', UserController.findAll);

// read one
router.get('/users/:idUser', UserController.findOneById);

// Update One
router.patch('/users/:idUser', UserController.updateOneById);

// Delete One
router.delete('/users/:idUser', UserController.deleteOneById);

module.exports = router;