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
            const users = await User.find({ is_active: true });
            if (users.length === 0) return res.status(404).json({ message: 'users not found' });
        res.status(200).json({ message: 'user list obtined', users });
        }catch (error) {
        res.status(400).json({ message: 'error fetching users', error });
        }
    },
    findOne: async (req, res) => {
        const id = req.params.idUser;

        try{
          const user = await User.findOne({ _id: id, is_active: true });
          if (!user) return res.status(404).json({ message: 'user not found' });
          return res.status(200).json({ message: 'user found', user })
        } catch (error) {
          return res.status(500).json({ error });
        }
    },
    updateOne: async (req, res) => {
        const id = req.params.idUser;
        try {
            const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
            return res.status(200).json({ message: 'user update', user: updatedUser });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    deleteOne: async (req, res) => {
        const id = req.params.idUser;
        try {
            await User.findByIdAndUpdate(id, { is_active: false }, { new: true });
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    destroyOne: async (req, res) => {
        const id = req.params.idUser;
        try {
            await User.findByIdAndRemove(id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}