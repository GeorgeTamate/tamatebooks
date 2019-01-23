"use strict";

const method = require('./../enums/httpMethods');
const type = require('./../enums/paramTypes');

const routes = {
    'books': {
        'method': method.GET,
        'controller': 'BookController',
        'action': 'index'
    },
    'book': {
        'method': method.GET,
        'controller': 'BookController',
        'action': 'getPage',
        'params': {
            'lenghts': [1, 3, 4],
            'types': [type.INT, type.STRING, type.INT, type.STRING],
            'values': [null, 'page', null, null]
        }
    }
};

module.exports = routes;
