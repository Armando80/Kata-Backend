const knex = require('../config');

const create = (bodyUser) => {
    return knex('users').insert(bodyUser);
}

const findAll = () => {
    return knex
    .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'created_at'])
    .from('users');
}


module.exports = {
    create,
    findAll,
}