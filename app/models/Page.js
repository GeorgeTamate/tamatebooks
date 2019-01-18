"use strict"

const Sequelize = require('sequelize');
const db = require('./../database/DB');

const Page = db.define('page', {
    content: {
        type: Sequelize.TEXT
    },
    page_number: {
        type: Sequelize.INTEGER
    },
    book_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Page;
