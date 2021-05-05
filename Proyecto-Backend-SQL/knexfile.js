// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'dcnmpesj',
      user: 'dcnmpesj',
      password: 'uc70NjKFczdZIOzO0Vzm3ZIBMUKE9a9J'
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
      database: 'dcnmpesj',
      user: 'dcnmpesj',
      password: 'uc70NjKFczdZIOzO0Vzm3ZIBMUKE9a9J'
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
      database: 'dcnmpesj',
      user: 'dcnmpesj',
      password: 'uc70NjKFczdZIOzO0Vzm3ZIBMUKE9a9J'
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
