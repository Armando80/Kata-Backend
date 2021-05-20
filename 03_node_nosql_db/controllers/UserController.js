const User = require('../models/User');


module.exports = {
    create: async (req, res) => {
        
    /* opcion 1 generar una instancia con new

        const newUser = new User(req.body);
        const response = await newUser.save();
    */
        try{
            console.log(req.body)
            const newUser = await User.create(req.body);
            res.status(201).json({ message: 'user created', user: newUser });
        }catch (error) {
            res.status(400).json({ message: 'error creating user', error });
        }

    },
    findAll: async (req, res) => {
        try {
            const users = await User.find();
        res.status(200).json({ message: 'user list obtined', users });
        }catch (error) {
        res.status(400).json({ message: 'error fetching users', error });
        }
    },
    findOne: async (req, res) => {
        const id = req.params.idUser;

        try{
          const user = await User.findById(id);
          return res.status(200).json({ message: 'user found', user })
        } catch (error) {
          return res.status(500).json({ error });
        }
    },
}