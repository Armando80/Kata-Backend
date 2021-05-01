const knex = require('../config');

const create = (bodyUser) => {
    return knex('users').insert(bodyUser);
}

module.exports = {
    create,
}