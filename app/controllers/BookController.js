"use strict";

const Controller = require('./AppController');
const Book = require('./../entities/Book');

class BookController extends Controller {

    index() {
        const books = Book.getBooks();
        const response = {
            data: books
        }
        return this.respondWithData(
            JSON.stringify(response),
            {'Content-Type': 'application/json'},
            200
        );
    }

    getPage(params) {
        let id = null;
        let page = null;
        let format = null;

        if(isNaN(params[0]) || params.length == 2) {
            return this.responseBadRequest('Invalid parameters');
        }

        id = params[0];
        page = 1;
        format = 'text';

        if(params.length >= 3) {
            if(params[1] != 'page' || isNaN(params[2])) {
                return this.responseBadRequest('Invalid parameters');
            }
            page = params[2];
        }

        if(params.length == 4) {
            format = params[3];
        }
        format = this.getResponseType(format);

        const content = Book.getPage(id, page, format);
        if(content == null) {
            return this.respondNotFound();
        }

        return this.respondWithData(
            content,
            {'Content-Type': 'text/html'},
            200
        );
    
    }

    getResponseType(type = null) {
        if(type == null) {
            type = 'text';
        }
        switch(type) {
            case 'text':
                return 'text/plain';
            case 'html':
                return 'text/html';
            default:
                return null;
        }
    }
}

module.exports = BookController;
