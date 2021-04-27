// Update with your config settings.

module.exports = {

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
