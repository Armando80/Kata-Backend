const knex = require('../config');

const create = (bodyUser) => {
    return knex('profile_users').insert(bodyUser);
}
const findAll = () => {
    return knex
    .select(['user_id', 'first_name','last_name', 'email', 'phone', 'skill_1', 'skill_2', 'skill_3', 'expected_salary', 'is_active'])
    .from('profile_users');
}

module.exports ={
    create,
    findAll,
}
