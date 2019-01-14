"use strict";

class PageFormatHelper {

    static formatContent(data, format) {
        switch(format) {
            case 'text/plain':
                const textFormatter = require('./pageFormats/textFormatter');
                return textFormatter.formatContent(data);
            case 'text/html':
                const htmlFormatter = require('./pageFormats/htmlFormatter');
                return htmlFormatter.formatContent(data);
            default:
                return null;
        }
    }
}

module.exports = PageFormatHelper;
