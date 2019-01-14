"use strict";

const Book = require('./../entities/Book');
const Page = require('./../entities/Page');

class DummyDataSupplier {
    static getBooks() {
        return [
            {id: 1, title: 'The Beginning of All Things', author: 'John Jackson', year: 1968},
            {id: 2, title: 'Standing Right in the Middle', author: 'Mike Moore', year: 2000},
            {id: 3, title: 'The End of the World', author: 'Emily Ericksen', year: 2012}
        ];
    }

    static getPage(bookNumber, pageNumber) {
        const books = [
            {
                id: 1, title: 'The Beginning of All Things', author: 'John Jackson', year: 1968,
                pages: [
                    {id: 1, number: 1, content: 'The Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.\nThe Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.\nThe Beginning of All Things, Page 1. The Beginning of All Things, Page 1. The Beginning of All Things, Page 1.'},
                    {id: 2, number: 2, content: 'The Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.\nThe Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.\nThe Beginning of All Things, Page 2. The Beginning of All Things, Page 2. The Beginning of All Things, Page 2.'},
                    {id: 3, number: 3, content: 'The Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.\nThe Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.\nThe Beginning of All Things, Page 3. The Beginning of All Things, Page 3. The Beginning of All Things, Page 3.'}
                ]
            },
            {
                id: 2, title: 'Standing Right in the Middle', author: 'Mike Moore', year: 2000,
                pages: [
                    {id: 4, number: 1, content: 'Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.\nStanding Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.\nStanding Right in the Middle, Page 1. Standing Right in the Middle, Page 1. Standing Right in the Middle, Page 1.'},
                    {id: 5, number: 2, content: 'Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.\nStanding Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.\nStanding Right in the Middle, Page 2. Standing Right in the Middle, Page 2. Standing Right in the Middle, Page 2.'},
                    {id: 6, number: 3, content: 'Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.\nStanding Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.\nStanding Right in the Middle, Page 3. Standing Right in the Middle, Page 3. Standing Right in the Middle, Page 3.'}
                ]
            },
            {
                id: 3, title: 'The End of the World', author: 'Emily Ericksen', year: 2012,
                pages: [
                    {id: 7, number: 1, content: 'The End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.\nThe End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.\nThe End of the World, Page 1. The End of the World, Page 1. The End of the World, Page 1.'},
                    {id: 8, number: 2, content: 'The End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.\nThe End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.\nThe End of the World, Page 2. The End of the World, Page 2. The End of the World, Page 2.'},
                    {id: 9, number: 3, content: 'The End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.\nThe End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.\nThe End of the World, Page 3. The End of the World, Page 3. The End of the World, Page 3.'}
                ]
            }
        ];

        if(bookNumber > books.length || bookNumber < 1) {
            return null;
        }

        const pageIndex = pageNumber - 1;
        const bookIndex = bookNumber - 1;
        const book = books[bookIndex];

        if(pageNumber > book.pages.length || pageNumber < 1) {
            return null;
        }

        const page = book.pages[pageIndex];

        const bookObj = {
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            totalPages: book.pages.length
        }

        return {
            id: page.id,
            number: page.number,
            content: page.content,
            book: bookObj
        }
    }
}

module.exports = DummyDataSupplier;