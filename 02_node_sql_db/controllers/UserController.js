const { User } = require('../models');

const create = (req, res) => {

    //console.log('🪐', req.body)
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        biography: req.body.biography,
    }
    // utilizando kenex, insertar el objeto en la base de datos
    return User
    .create(newUser)
    .then((resDB) => {
      return res.status(200).json({
        message: 'user created',
        rental: resDB,
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      })
    })

    // responder al usuario los que nos responda la base de datos
    /* return res.status(200).json({
        message: 'user crated',
        user: newUser,
    }) */
}

module.exports = {
    create,
}