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
router.patch('/users/:idUser', UserContoller.updateOne);

//Delete (Logical, One)
router.delete('/users/:idUser', UserContoller.deleteOne);



module.exports = router;
