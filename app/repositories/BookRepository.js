"use strict";

const BookModel = require('./../models/Book');
const PageModel = require('./../models/Page');

class BookRepository {

    static async getBooks() {
        return BookModel.findAll({
            attributes: ['id', 'title', 'author', 'year'],
            raw: true
        })
        .then(books => {
            return books;
        })
        .catch(err => console.log('get books error:', err));
    }

    static async getPage(bookId, pageNumber) {
        let page = await PageModel.findOne({
            where: {page_number: pageNumber, book_id: bookId},
            raw: true,
            attributes: ['id', 'content', ['page_number', 'number']]
        })
        .then(page => {
            return page;
        })
        .catch(err => {
            console.log('get page error:', err);
        });

        if(page == null) {
            return null;
        }

        let book = await BookModel.findOne({
            where: {id: bookId},
            raw: true,
            attributes: ['id', 'title', 'author', 'year']
        })
        .then(book => {
            console.log(book);
            return book;
        })
        .catch(err => {
            console.log('get book error:', err);
        });

        if(book == null) {
            return null;
        }

        page.book = book;
        return page;
    }
}

module.exports = BookRepository;
