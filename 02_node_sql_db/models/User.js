const knex = require('../config');

const create = (bodyUser) => {
    return knex('users').insert(bodyUser);
}

const findAll = () => {
    return knex
    .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'is_active', 'created_at'])
    .from('users');
}

const findOneById = (id) => {
    return knex
    .select(['user_id', 'first_name', 'last_name', 'email', 'phone', 'is_active', 'created_at'])
    .from('users')
    .where({ user_id: id });
}

const updateOneById = (id, updateBody) => {
    return knex
    .update(updateBody)
    .from('users')
    .where({ user_id: id });
}

// Borrado logico (desactivar)
const deleteOneById = (id) => {
    return knex
    .update({ is_active: false })
    .from('users')
    .where({ user_id: id });
}


module.exports = {
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
}