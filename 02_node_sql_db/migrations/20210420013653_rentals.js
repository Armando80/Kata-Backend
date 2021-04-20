
exports.up = function(knex) {
 // crea una tabla con el nombre del primer argumento si es que no existeesa tabla 
    return knex.schema.createTableIfNotExists('rentals', (table) => {
 // dentro del callback definimos nuestra tabla
    table.increments('rental_id').primary();
//table.tipo de dato('nombre de la columna').atributos de la columna
    table.string('title').notNullable();
    table.string('address').notNullable();
    table.integer('guests').notNullable();
    table.text('description');
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rentals');
};
