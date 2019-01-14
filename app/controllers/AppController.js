"use strict";

class AppController {
    respondWithData(content, headers = null, code = 200) {
        const response = {
            code: code,
            headers: headers,
            body: content
        };
        return response;
    }

    responseBadRequest(message = null) {
        if(message == null) {
            message = 'Bad Request';
        }
        const data = {
            error: {
                message: message
            }
        };
        const response = {
            code: 400,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        return response;
    }

    respondNotFound(message = null) {
        if(message == null) {
            message = 'Not Found';
        }
        const data = {
            error: {
                message: message
            }
        };
        const response = {
            code: 404,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        return response;
    }
}

module.exports = AppController;