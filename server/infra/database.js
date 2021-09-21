const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: '1234',
    port: 5432,
    database: 'blog'
})

module.exports = db