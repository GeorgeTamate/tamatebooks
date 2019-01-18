"use strict";

const repository = require('./../repositories/BookRepository');

class Book {
    constructor() {
        this.id = null;
        this.title = null;
        this.author = null;
        this.year = null;
    }

    toObj() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            year: this.year
        }
    }

    static async getBooks() {
        const data = await repository.getBooks();
        return data;
    }

    static async getPage(book, page, format) {
        const data = await repository.getPage(book, page);
        if(data == null) {
            return null;
        }
        const formatter = require('./../helpers/formatters/PageFormatHelper');
        return formatter.formatContent(data, format);
    }
}

module.exports = Book;
