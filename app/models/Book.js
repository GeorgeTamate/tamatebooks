"use strict"

const Sequelize = require('sequelize');
const db = require('./../database/DB');

const Book = db.define('book', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.DATEONLY
    }
}, {
    timestamps: false
});

module.exports = Book;
