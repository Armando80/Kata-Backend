const { User } = require('../models');

const create = (req, res) => {
    const newUser ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        skill_1: req.body.skill_1,
        skill_2: req.body.skill_2,
        skill_3: req.body.skill_3,
        expected_salary: req.body.expected_salary,
    }
    return res.status(200).json({
        message: 'user created',
        user: newUser,
    })
}

const findAll = async (req, res) => {
    try{
        const response = await User.findAll();
        return res.status(200).json({
            message: 'Successfully obtained list of users',
            response,
        });
    } catch(error){
        return res.status(500).json({
            message: 'Error obtained list of users',
            error,
        });
    }
}

module.exports = {
    create,
    findAll,
}