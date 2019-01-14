"use strict";

class TextFormatter {

    static formatContent(page) {
        let content = '';
        let paragraphs = page.content.split('\n');
        content += page.book.title + '\n\n';
        content += 'Page ' + page.number + '\n';

        paragraphs.forEach(function (parag) {
            content += '\n\n' + parag;
        });
        
        return content;
    }

}

module.exports = TextFormatter;