"use strict";

const routes = {
    'books': {
        'method': 'GET',
        'controller': 'BookController',
        'action': 'index',
        'param': 'none',
    },
    'book': {
        'method': 'GET',
        'controller': 'BookController',
        'action': 'getPage',
        'param': 'number'
    }
};

module.exports = routes;