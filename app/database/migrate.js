"use strict";

require('dotenv').config();

const fs = require('fs');
const migrationsPath = './app/database/migrations/';
const Sequelize = require('sequelize');
const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DBMS,
        dialectOptions: {
            multipleStatements: true
        },
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

async function migrate(items) {
    for(let i = 0; i < items.length; i++) {
        let migration = require('./migrations/' + items[i]);
        let res = await db.query(migration['up']).spread((results, metadata) => results);
        console.log(res);
    }
}

fs.readdir(migrationsPath, function(err, items) {
    items.sort();
    console.log(items);
    migrate(items);
});
