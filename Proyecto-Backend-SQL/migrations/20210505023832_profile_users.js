
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('profile_users',(table) => {
      table.increments('user_id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.integer('phone').notNullable();
      table.string('skill_1').notNullable();
      table.string('skill_2').notNullable();
      table.string('skill_3').nullable();
      table.integer('expected_salary').notNullable();
      table.boolean('is_active').notNullable().defaultTo(true);
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('profile_users');
};
