const express = require('express');
const router = express.Router();

const { RentalController } = require('../controllers');
const { Rental } = require('../models');

//create
router.post('/rentals', RentalController.create );
//read all
router.get('/rentals', RentalController.findAll);
//read one
router.get('/rentals/:idRental', RentalController.findOneById);
//update one
router.patch('/rentals/:idRental', RentalController.updateOneById);
//delete one (borrado logico)
router.delete('/rentals/:idRental', RentalController.deleteOneById);
//destroy one (borrado fisico)


module.exports = router;