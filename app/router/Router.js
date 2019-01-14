"use strict";
const routes = require('./routes');

class Router{
    handleRequest(req) {
        let response = this.route(req.method, req.url)
        return response;
    }

    route(method, url) {
        let urlData = this.parseUrl(url);

        if(!routes.hasOwnProperty(urlData.action) || routes[urlData.action]['method'] != method) {
            return this.getNotFoundResponse('Action not found');
        }
        if(!this.hasValidParams(urlData)) {
            return this.getNotFoundResponse('Action not found with specified parameters');
        }

        const controllerName = routes[urlData.action]['controller'];
        const Controller = require('./../controllers/'+controllerName);
        const controller = new Controller();
        const actionMethod = routes[urlData.action]['action'];
        if(routes[urlData.action]['param'] == 'none') {
            return controller[actionMethod]();
        }
        return controller[actionMethod](urlData.params);
    }

    parseUrl(url) {
        if(url.slice(-1) == '/') {
            url = url.slice(0, url.length-1);
        }
        let urlArray = url.split('/');

        let data = {
            action: urlArray[1],
            params: []
        };

        for(let i = 0; i < urlArray.length; i++) {
            if(i <= 1) {
                continue;
            }
            data.params.push(urlArray[i]);
        }

        return data;
    }

    hasValidParams(data) {
        switch(routes[data.action]['param']) {
            case 'number':
                if(data.params.length < 1) {
                    return false;
                }
                if(isNaN(data.params[0])) {
                    return false;
                }
                break;
            case 'none':
            default:
                if(data.params.length > 0) {
                    return false;
                }
                break;
        }
        return true;
    }

    getNotFoundResponse(message = null) {
        if(message == null) {
            message = 'Action not Found';
        }
        let body = {
            error: {
                message: message
            }
        };
        const response = {
            code: 404,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        };
        return response;
    }
}

module.exports = Router;