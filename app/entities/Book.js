"use strict";

const supplier = require('./../helpers/DummyDataSupplier');

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

    static getBooks() {
        return supplier.getBooks();
    }

    static getPage(book, page, format) {
        const data = supplier.getPage(book, page);
        if(data == null) {
            return null;
        }
        const formatter = require('./../helpers/formatters/PageFormatHelper');
        return formatter.formatContent(data, format);
    }
}

module.exports = Book;
