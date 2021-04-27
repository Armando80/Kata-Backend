
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('users', (table) => {
      table.increments('user_id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.integer('phone').notNullable();
      table.text('biography').nullable();
      table.boolean('is_active').notNullable().defaultTo(true);
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
