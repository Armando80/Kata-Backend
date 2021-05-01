const create = (req, res) => {

    const newUser = {
        first_name: '',
        last_name: '',
        email: '',
        phone: 0,
        biography: '',
    }
    // utilizando kenex, insertar el objeto en la base de datos

    // responder al usuario los que nos responda la base de datos
    return res.status(200).json({
        message: 'user crated',
        user: newUser,
    })
}

module.exports = {
    create,
}