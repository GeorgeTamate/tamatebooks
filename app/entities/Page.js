"use strict";

class Page {
    constructor() {
        this.id = null;
        this.number = null;
        this.content = null;
        this.book = null;
    }

    toObj() {
        let bookObj = null;
        if(this.book != null) {
            bookObj = this.book.toObj;
        }
        return {
            id: this.id,
            number: this.number,
            content: this.content,
            book: bookObj
        }
    }

}

module.exports = Page;
