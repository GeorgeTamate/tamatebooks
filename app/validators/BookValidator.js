"use strict";

const Validator = require('./Validator');

class BookValidator extends Validator {

    constructor(routeParams, requestParams) {
        super(routeParams, requestParams);
    }

    getPage() {
        // @TODO
    }
}

module.exports = BookValidator;
