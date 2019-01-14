"use strict";

class HtmlFormatter {

    static formatContent(page) {
        let content = '';
        let paragraphs = page.content.split('\n');

        content += '<div>';
        content += '<h2>' + page.book.title + '</h2>';
        content += '<br>';
        content += '<div>';
        
        paragraphs.forEach(function (parag) {
            content += '<p>' + parag + '</p>';
        });

        content += '</div>';
        content += '<br>';
        content += '<span>' + 'Page ' + page.number + '</span>';
        content += '</div>';
        
        return content;
    }

}

module.exports = HtmlFormatter;