const express = require('express');
const router = express.Router();
const UserContoller = require('../controllers/UserController');

//Creat
router.post('/users', UserContoller.create);

//Read (all)
router.get('/users', UserContoller.findAll);

//Read one
router.get('/users/:idUser', UserContoller.findOne);
//Update one

//Delete (Logical, One)

module.exports = router;
