// Update with your config settings.

module.exports = {
  // contiene datos de prueba para hacer todo tipo de experimentos
  development: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'sfetowep',
      user:     'sfetowep',
      password: 'FTirovsOABt1zmACHzwkIPJ3L4mdnmfc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  //contiene una copia exacta (o tan exacta como se necesite) de produccion
  staging: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'sfetowep',
      user:     'sfetowep',
      password: 'FTirovsOABt1zmACHzwkIPJ3L4mdnmfc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // datos reales de tu negocio: los datos en produccion
  production: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'sfetowep',
      user:     'sfetowep',
      password: 'FTirovsOABt1zmACHzwkIPJ3L4mdnmfc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
